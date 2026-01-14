'use client';

import { useState, useRef, useCallback } from 'react';
import { VehicleImage } from '@/types/vehicle';

interface ImageUploaderProps {
    images: VehicleImage[];
    onChange: (images: VehicleImage[]) => void;
    maxImages?: number;
}

export default function ImageUploader({ images, onChange, maxImages = 20 }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        if (images.length + files.length > maxImages) {
            alert(`Maximum ${maxImages} images allowed`);
            return;
        }

        setUploading(true);
        const token = localStorage.getItem('token');
        const newImages: VehicleImage[] = [...images];

        for (const file of Array.from(files)) {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch('/api/upload', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (res.ok) {
                    const data = await res.json();
                    newImages.push({
                        url: data.url,
                        public_id: data.public_id,
                        order: newImages.length,
                    });
                } else {
                    const error = await res.json();
                    alert(`Failed to upload ${file.name}: ${error.error}`);
                }
            } catch (error) {
                console.error('Upload error:', error);
                alert(`Failed to upload ${file.name}`);
            }
        }

        onChange(newImages);
        setUploading(false);

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleRemove = async (index: number) => {
        const image = images[index];
        const token = localStorage.getItem('token');

        // Try to delete from Cloudinary if public_id exists
        if (image.public_id) {
            try {
                await fetch('/api/upload', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ public_id: image.public_id }),
                });
            } catch (error) {
                console.error('Failed to delete from Cloudinary:', error);
            }
        }

        const newImages = images.filter((_, i) => i !== index).map((img, i) => ({
            ...img,
            order: i,
        }));
        onChange(newImages);
    };

    // Drag and drop handlers
    const handleDragStart = useCallback((index: number) => {
        setDraggedIndex(index);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault();
        setDragOverIndex(index);
    }, []);

    const handleDragEnd = useCallback(() => {
        if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
            const newImages = [...images];
            const [draggedItem] = newImages.splice(draggedIndex, 1);
            newImages.splice(dragOverIndex, 0, draggedItem);

            // Update order values
            const reorderedImages = newImages.map((img, i) => ({
                ...img,
                order: i,
            }));

            onChange(reorderedImages);
        }
        setDraggedIndex(null);
        setDragOverIndex(null);
    }, [draggedIndex, dragOverIndex, images, onChange]);

    return (
        <div className="space-y-4">
            {/* Upload Button */}
            <div className="flex items-center gap-4">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="image-upload"
                />
                <label
                    htmlFor="image-upload"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300 ${uploading
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-[#004B3A] hover:bg-[#66E5C4] hover:text-[#0A0A0A] text-[#F7F7F7]'
                        }`}
                >
                    {uploading ? (
                        <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Uploading...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Add Images
                        </>
                    )}
                </label>
                <span className="text-sm text-[#A9AAAE]">
                    {images.length} / {maxImages} images • Drag to reorder
                </span>
            </div>

            {/* Image Grid */}
            {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={image.public_id || image.url}
                            draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragEnd={handleDragEnd}
                            className={`relative group aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-move ${draggedIndex === index
                                ? 'opacity-50 border-[#66E5C4]'
                                : dragOverIndex === index
                                    ? 'border-[#66E5C4] scale-105'
                                    : 'border-[#004B3A] hover:border-[#66E5C4]'
                                }`}
                        >
                            <img
                                src={image.url}
                                alt={`Vehicle image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Order badge */}
                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {index + 1}
                            </div>

                            {/* Delete button */}
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Primary badge for first image */}
                            {index === 0 && (
                                <div className="absolute bottom-2 left-2 bg-[#66E5C4] text-[#0A0A0A] text-xs px-2 py-1 rounded font-medium">
                                    Primary
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Empty state */}
            {images.length === 0 && (
                <div className="border-2 border-dashed border-[#A9AAAE] rounded-lg p-12 text-center">
                    <svg className="w-16 h-16 mx-auto text-[#A9AAAE] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#A9AAAE]">No images uploaded yet</p>
                    <p className="text-sm text-[#A9AAAE] mt-1">Click &quot;Add Images&quot; to upload vehicle photos</p>
                </div>
            )}
        </div>
    );
}
