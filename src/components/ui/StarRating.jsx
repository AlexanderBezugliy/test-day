import React from 'react'

const StarRating = ({ rating, totalReviews }) => {
    const stars = "/cards/star.png";

    const numberOfStars = Math.round(rating);

    const starsArray = Array.from({ length: numberOfStars }, (_, i) => i + 1);
    
    if (numberOfStars === 0) {
        return (
            <div className="flex items-center">
                <span className="ml-2 text-sm text-gray-500">
                    ({totalReviews || ''})
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center space-x-1">
            {starsArray.map((starIndex) => (
                <div 
                    key={starIndex} 
                    className="relative w-5 h-5"
                >
                    <img 
                        src={stars} 
                        alt="stars" 
                        className='w-full h-full' 
                    />
                </div>
            ))}
            
            {/* totalReviews */}
            {totalReviews && (
                <span className="ml-2 text-sm text-gray-500">
                    ({totalReviews})
                </span>
            )}
        </div>
    )
}

export default StarRating;