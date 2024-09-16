// src/pages/photos.jsx

import React from 'react';
import images from '../images.json'; // Import the JSON file containing image paths

const Photos = () => {
    console.log("Images loaded from JSON:", images); // Log loaded images

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 ">
            {images && images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index} className="w-full h-auto">
                        <img
                            src={image}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-[120px] object-cover rounded-lg"
                            
                        />
                      
                    </div>
                ))
            ) : (
                <p>No images found.</p>
            )}
        </div>
    );
};

export default Photos;
