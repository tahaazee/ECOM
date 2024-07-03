import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./productList.css"

const ProductBox = ({ product, addToCart }) => {
  
  const [stars, setStars] = useState(0);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleStarClick = (starCount) => {
    setStars(starCount);
    // Additional logic to save stars or update in backend
  };

  return (
    <>
    <div style={{display:"flex", paddingRight:"10px",margin: "-115px -42px 19px -19px"
    }}>
    <div className="product-box" style={{margin: " 6px 18px 159px 35px"}}>
    <a href="https://ibb.co/nR8Vdc0"><img src="https://i.ibb.co/nR8Vdc0/images-1.jpg" alt="images-1" border="0"/></a>
      <div className="product-info">
        <h3>camera</h3>
        <p>190$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/Ctzx9SX"><img src="https://i.ibb.co/Ctzx9SX/images-2.jpg" alt="images-2" border="0"/></a>
      <div className="product-info">
        <h3>Moisture</h3>
        <p>70$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/DC1P3ZB"><img src="https://i.ibb.co/DC1P3ZB/product-photography-relax-natural-beauty-260nw-1993589426.webp" alt="product-photography-relax-natural-beauty-260nw-1993589426" border="0"/></a>
      <div className="product-info">
        <h3>Lotion</h3>
        <p>25$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/pfrgkcF"><img src="https://i.ibb.co/pfrgkcF/images-3.jpg" alt="images-3" border="0"/></a>
      <div className="product-info">
        <h3>Nike Shoes</h3>
        <p>330$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    </div>
    <div style={{display:"flex", paddingRight:"10px",margin: "-115px -42px 19px -19px"
    }}>
    <div className="product-box" style={{margin: " 6px 18px 159px 35px"}}>
    <a href="https://ibb.co/R3BqSD3"><img src="https://i.ibb.co/R3BqSD3/images-5.jpg" alt="images-5" border="0"/></a>
      <div className="product-info">
        <h3>Base</h3>
        <p>220$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/txv5fyJ"><img src="https://i.ibb.co/txv5fyJ/images-4.jpg" alt="images-4" border="0"/></a>
      <div className="product-info">
        <h3>Watch</h3>
        <p>170$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/25XbNms"><img src="https://i.ibb.co/25XbNms/images-6.jpg" alt="images-6" border="0"/></a>
      <div className="product-info">
        <h3>Cube</h3>
        <p>5$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    <div className="product-box"  style={{margin: " 6px 18px 159px 3px"}}>
    <a href="https://ibb.co/10w31Kq"><img src="https://i.ibb.co/10w31Kq/images-7.jpg" alt="images-7" border="0"/></a>
      <div className="product-info">
        <h3>Rose Lipstick</h3>
        <p>20$
        </p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= stars ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    </div>
    </>
  );
};

// ProductBox.propTypes = {
//   product: PropTypes.object.isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

export default ProductBox;
