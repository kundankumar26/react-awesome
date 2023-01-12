const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    return (
        <div className='restaurant-card'>
            <img alt='logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
};

export default RestaurantCard;