
let rooms = [];
let bookings = [];


const booked_data = async(req,res)=>{
    try{

        const { roomName, seatsAvailable, amenities, pricePerHour } = req.body;
           
        const roomId = rooms.length + 1;
        
  const newRoom = {
    roomId,
    roomName,
    seatsAvailable,
    amenities,
    pricePerHour,
  };
  rooms.push(newRoom);
  res.status(201).json(newRoom);
          } catch(error){
        console.log(error)
  }}

const booking2=async(req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
  
    
    const bookingId = bookings.length + 1;
  
    const newBooking = {
      bookingId,
      customerName,
      date,
      startTime,
      endTime,
      roomId,
      bookingStatus: 'confirmed',
    };
   bookings.push(newBooking);
  res.status(201).json(newBooking);
  };
  
  
  const room_data = async(req, res) => {
    const roomsWithBookings = rooms.map(room => {
      const booked = bookings.find(booking => booking.roomId === room.roomId);
      if (booked) {
        return {
          ...room,
          bookedStatus: 'booked',
          customerName: booked.customerName,
          date: booked.date,
          startTime: booked.startTime,
          endTime: booked.endTime,
        };
      } else {
        return {
          ...room,
          bookedStatus: 'available',
          customerName: null,
          date: null,
          startTime: null,
          endTime: null,
        };
      }
    });
  
    res.json(roomsWithBookings);
  };
  
  
 const customer = async(req, res) => {
    const customersWithBookings = bookings.map(booking => {
      const room = rooms.find(room => room.roomId === booking.roomId);
      return {
        customerName: booking.customerName,
        roomName: room.roomName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      };
    });
  
    res.json(customersWithBookings);
  };
  

  const customer_data = async(req, res) => {
    const { customerName } = req.params;
  
    const customerBookings = bookings.filter(booking => booking.customerName === customerName)
      .map(booking => ({
        ...booking,
        bookingDate: new Date().toISOString(), 
      }));
  
    res.json(customerBookings);
  };
  

 

module.exports={
   
    booked_data,customer_data,booking2,room_data,customer
  

}