import mongoose, { Schema, models } from "mongoose";

const ImageSchema = new Schema({
    url: String,
    public_id: String,
});

const VehicleSchema = new Schema(
    {
        title: { type: String, required: true },

        brand: { type: String, required: true, index: true },
        model: { type: String, required: true, index: true },
        variant: { type: String },

        year: { type: Number, index: true },

        price: { type: Number },
        priceMin: { type: Number },
        priceMax: { type: Number },

        mileage: { type: Number },
        mileageMin: { type: Number },
        mileageMax: { type: Number },

        transmission: {
            type: String,
            enum: ["Manual", "Automatic"],
            index: true,
        },

        fuelType: {
            type: String,
            enum: ["Petrol", "Diesel", "Hybrid", "EV"],
            index: true,
        },

        drivetrain: { type: String },
        exteriorColor: { type: String },

        listingType: {
            type: String,
            enum: ["Order It", "Secure It", "Buy It"],
            required: true,
            index: true,
        },

        status: {
            type: String,
            enum: ["Available", "In Transit", "Sold"],
            default: "Available",
            index: true,
        },

        auctionGrade: { type: String },
        importSource: { type: String, default: "Japan" },

        eta: { type: Date },

        description: { type: String },

        images: [ImageSchema],

        featured: { type: Boolean, default: false },
        published: { type: Boolean, default: true },
    },
    { timestamps: true }
);

// Index for search
VehicleSchema.index({ title: 'text', brand: 'text', model: 'text', variant: 'text', description: 'text' });

export default models.Vehicle || mongoose.model("Vehicle", VehicleSchema);
