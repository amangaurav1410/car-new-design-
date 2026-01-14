import Link from 'next/link';
import { Vehicle, LISTING_TYPE_LABELS, STATUS_LABELS } from '@/types/vehicle';

interface VehicleCardProps {
    vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    // Get display price
    const getDisplayPrice = () => {
        if (vehicle.price) {
            return `AUD $${vehicle.price.toLocaleString()}`;
        }
        if (vehicle.priceMin && vehicle.priceMax) {
            return `AUD $${vehicle.priceMin.toLocaleString()} – $${vehicle.priceMax.toLocaleString()}`;
        }
        if (vehicle.priceMin) {
            return `From AUD $${vehicle.priceMin.toLocaleString()}`;
        }
        if (vehicle.priceMax) {
            return `Up to AUD $${vehicle.priceMax.toLocaleString()}`;
        }
        return 'Price on Request';
    };

    // Get display mileage
    const getDisplayMileage = () => {
        if (vehicle.mileage) {
            return `${vehicle.mileage.toLocaleString()} km`;
        }
        if (vehicle.mileageMin && vehicle.mileageMax) {
            return `${vehicle.mileageMin.toLocaleString()} - ${vehicle.mileageMax.toLocaleString()} km`;
        }
        return null;
    };

    // Get listing type badge styles
    const getListingTypeBadge = () => {
        switch (vehicle.listingType) {
            case 'order_it':
                return { bg: 'bg-purple-600', text: 'Order It' };
            case 'secure_it':
                return { bg: 'bg-blue-600', text: 'Secure It' };
            case 'buy_it':
                return { bg: 'bg-green-600', text: 'Buy It' };
            default:
                return { bg: 'bg-gray-600', text: vehicle.listingType };
        }
    };

    const listingBadge = getListingTypeBadge();
    const mileage = getDisplayMileage();

    return (
        <Link
            href={`/vehicles-for-import/${vehicle.slug}`}
            className="group bg-gradient-to-br from-[#0F1614] to-[#25614F]/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#25614F]/20 border border-[#25614F]/30 hover:border-[#25614F]/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] block"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                {vehicle.images?.[0] ? (
                    <img
                        src={vehicle.images[0].url}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#25614F]/20 to-[#0F1614] flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#25614F]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Listing Type Badge */}
                <div className={`absolute top-4 left-4 ${listingBadge.bg} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {listingBadge.text}
                </div>

                {/* Grade Badge (if exists) */}
                {vehicle.auctionGrade && (
                    <div className="absolute top-4 right-4 bg-[#25614F] text-[#EAE2D6] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {vehicle.auctionGrade}
                    </div>
                )}

                {/* Featured Badge */}
                {vehicle.featured && (
                    <div className="absolute bottom-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                        ⭐ Featured
                    </div>
                )}

                {/* Import Source Badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    From {vehicle.importSource}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#EAE2D6] mb-1 group-hover:text-[#25614F] transition-colors">
                    {vehicle.brand} {vehicle.model}
                </h3>

                {vehicle.variant && (
                    <p className="text-[#BDB6AD] text-sm mb-3">{vehicle.variant}</p>
                )}

                <div className="flex flex-wrap items-center gap-4 text-[#BDB6AD] mb-4">
                    <span className="flex items-center gap-1">
                        <span className="text-[#25614F]">📅</span> {vehicle.year}
                    </span>
                    {mileage && (
                        <span className="flex items-center gap-1">
                            <span className="text-[#25614F]">🛣️</span> {mileage}
                        </span>
                    )}
                    {vehicle.transmission && (
                        <span className="flex items-center gap-1">
                            <span className="text-[#25614F]">⚙️</span> {vehicle.transmission}
                        </span>
                    )}
                </div>

                {/* ETA for Secure It listings */}
                {vehicle.listingType === 'secure_it' && vehicle.eta && (
                    <div className="text-blue-400 text-sm mb-3 flex items-center gap-2">
                        <span>🚢</span>
                        ETA: {new Date(vehicle.eta).toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}
                    </div>
                )}

                <p className="text-2xl font-bold text-[#25614F] mb-4">
                    {getDisplayPrice()}
                </p>

                <div className="inline-flex items-center text-[#BDB6AD] hover:text-[#25614F] font-bold text-lg transition-all duration-300 bg-[#25614F]/10 hover:bg-[#25614F]/20 px-4 py-2 rounded-lg group-hover:translate-x-1">
                    View Details
                    <span className="ml-2 text-xl">→</span>
                </div>
            </div>
        </Link>
    );
}
