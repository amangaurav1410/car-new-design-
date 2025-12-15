import mongoose from 'mongoose';

const CarListingSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  description: { type: String },
  images: [{ type: String }],
  status: { type: String, enum: ['available', 'sold'], default: 'available' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.CarListing || mongoose.model('CarListing', CarListingSchema);