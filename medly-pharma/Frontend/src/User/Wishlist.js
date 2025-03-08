// // Wishlist.js
// import React from 'react';

// function Wishlist({ wishlistedItems, onRemoveItem, onAddToWishlist }) {
//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <div className="car-container">
//         {wishlistedItems.map((item) => (
//           <div className="car-card" key={item._id}>
//             <img
//               src={`http://localhost:8000/${item?.itemImage}`}
//               alt={`${item.itemtype} Image`}
//             />
//             <p>Item Type: {item.itemtype}</p>
//             <p>Description: {item.description}</p>
//             <p>Price: {item.price}</p>
//             <div className="ml-auto">
//               <button onClick={() => onRemoveItem(item)}>Remove from Wishlist</button>
//             </div>
//             <div className="heart-icon" onClick={() => onAddToWishlist(item)}>
//               {item.inWishlist ? '❤️' : '🤍'}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;


// components/WishlistItem.js


// components/Wishlist.js

import React from 'react';
import WishlistItem from './WishlistItem';

const Wishlist = ({ wishlist, onRemove }) => {
  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <WishlistItem key={item._id} item={item} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default Wishlist;

