import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
    images: [String],
    title: String,
    description: String,
    price: Number,
    location: String,
    rooms: Number,
    addedBy: String,
});

const House = mongoose.model('House', HouseSchema);

export default House;