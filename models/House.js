import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
    location: String,
    rooms: Number,
   
});

const House = mongoose.model('House', HouseSchema);

export default House;