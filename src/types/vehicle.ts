// Vehicle Types for the Vehicle Import System

export interface VehicleImage {
    url: string;
    public_id?: string; // Cloudinary public ID for deletion
    order?: number;
}

export type ListingType = 'Order It' | 'Secure It' | 'Buy It';
export type VehicleStatus = 'Available' | 'In Transit' | 'Sold';
export type Transmission = 'Manual' | 'Automatic';
export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'EV';
export type Drivetrain = string;

export interface Vehicle {
    _id: string;
    title: string;
    brand: string;
    model: string;
    variant?: string;
    year: number;

    // Pricing
    price?: number;
    priceMin?: number;
    priceMax?: number;

    // Mileage
    mileage?: number;
    mileageMin?: number;
    mileageMax?: number;

    // Vehicle Specs
    transmission?: Transmission;
    fuelType?: FuelType;
    drivetrain?: Drivetrain;
    exteriorColor?: string;

    // Import Details
    importSource: string;
    auctionGrade?: string;
    eta?: string; // ISO date string

    // Listing Classification
    listingType: ListingType;
    status: VehicleStatus;

    // Content
    description?: string;
    images: VehicleImage[];

    // Flags
    featured: boolean;
    published: boolean;

    // Timestamps
    createdAt: string;
    updatedAt: string;
}

// Form data for creating/updating vehicles
export interface VehicleFormData {
    title: string;
    brand: string;
    model: string;
    variant?: string;
    year: number | string;
    price?: number | string;
    priceMin?: number | string;
    priceMax?: number | string;
    mileage?: number | string;
    mileageMin?: number | string;
    mileageMax?: number | string;
    transmission?: Transmission;
    fuelType?: FuelType;
    drivetrain?: Drivetrain;
    exteriorColor?: string;
    importSource: string;
    auctionGrade?: string;
    eta?: string;
    listingType: ListingType;
    status: VehicleStatus;
    description?: string;
    images: VehicleImage[];
    featured: boolean;
    published: boolean;
}

// Filter options for the listing page
export interface VehicleFilters {
    brand?: string;
    model?: string;
    yearMin?: number;
    yearMax?: number;
    priceMin?: number;
    priceMax?: number;
    mileageMin?: number;
    mileageMax?: number;
    transmission?: Transmission;
    fuelType?: FuelType;
    listingType?: ListingType;
    status?: VehicleStatus;
    search?: string;
}

// Response from filters API with unique values
export interface FilterOptions {
    brands: string[];
    modelsByBrand: Record<string, string[]>;
    transmissions: Transmission[];
    fuelTypes: FuelType[];
    listingTypes: string[];
    priceRange: { min: number; max: number };
    mileageRange: { min: number; max: number };
    yearRange: { min: number; max: number };
}

// API response types
export interface VehicleListResponse {
    vehicles: Vehicle[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

// Listing type display helpers
export const LISTING_TYPE_LABELS: Record<string, string> = {
    'Order It': 'Order It',
    'Secure It': 'Secure It',
    'Buy It': 'Buy It',
    // Fallbacks for old values if any remain
    'order_it': 'Order It',
    'secure_it': 'Secure It',
    'buy_it': 'Buy It',
};

export const LISTING_TYPE_DESCRIPTIONS: Record<string, string> = {
    'Order It': 'Custom import from auction',
    'Secure It': 'In transit / Pre-arrival',
    'Buy It': 'In Stock - Ready to buy',
};

export const STATUS_LABELS: Record<string, string> = {
    'Available': 'Available',
    'In Transit': 'In Transit',
    'Sold': 'Sold',
};

export const STATUS_COLORS: Record<string, string> = {
    'Available': 'bg-green-600',
    'In Transit': 'bg-blue-600',
    'Sold': 'bg-red-600',
};
