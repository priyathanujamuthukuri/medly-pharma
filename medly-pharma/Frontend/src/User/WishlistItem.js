import React from 'react';

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div className="wishlist-item">
      <img src={item.image} alt={item.name} />
      <div className="wishlist-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => onRemove(item._id)}>Remove from Wishlist</button>
      </div>
    </div>
  );
};

export default WishlistItem;