import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    userId: String,
    listingId: String,
    startDate: Date,
    endDate: Date
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;