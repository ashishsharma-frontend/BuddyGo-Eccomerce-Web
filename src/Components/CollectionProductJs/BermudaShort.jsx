import React, { useState } from "react";
import "../ColectionProductCss/Product.css";
import { Link } from "react-router-dom";

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import BermudaShortOne from "../RealArtistImages/ProductImg/BermudaShortOne.jpg";
import BermudaShortTwo from "../RealArtistImages/ProductImg/BermudaShortTwo.jpg";

function BermudaShort() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-img-content">
          <div className="image-wrapper">
            <span className="prev" onClick={handlePreviousClick}>
              <GrFormPrevious size={30} />
            </span>
            <img
              src={currentImageIndex === 0 ? BermudaShortOne : BermudaShortTwo}
              alt=""
              className="product-image"
            />
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>
        <div className="text-content">
          <div className="heading">
            <h1>FADED JOGGING BERMUDA SHORTS</h1>
          </div>
          <div className="product-price">
            <p>
              Rs. <span>2,200</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>
          <div className="para">
            <p>
              Faded relaxed fit Bermuda shorts. Adjustable elasticated
              waistband. Side pockets and back patch pocket. Uneven hem.
            </p>
          </div>
          <div className="size-boxes">
            {["m", "xl", "l", "s"].map((size) => (
              <div
                key={size}
                className={`size-box ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
          <Link to="/shopping-cart">
            <div className="product-button">
              <div>Add To Shopping Bag</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BermudaShort;
