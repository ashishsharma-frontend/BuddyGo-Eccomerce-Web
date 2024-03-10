import React, { useState } from "react";
import "../ColectionProductCss/Product.css"; // Importing the CSS file
import { Link } from "react-router-dom";
import PaddedParkaOne from "../RealArtistImages/ProductImg/HoodOne.jpg";
import PaddedParkaTwo from "../RealArtistImages/ProductImg/HoodTwo.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Functional component for the PaddedParka product
function PaddedParka() {
  // State for the selected size and current image index
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handler for size click event
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handler for next button click
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  // Handler for previous button click
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // JSX structure of the component
  return (
    <div className="product-container">
      <div className="product-content">
        {/* Product Image Content */}
        <div className="product-img-content">
          <div className="image-wrapper">
            {/* Previous button */}
            <span className="prev" onClick={handlePreviousClick}>
              <GrFormPrevious size={30} />
            </span>
            {/* Product Image */}
            <img
              src={currentImageIndex === 0 ? PaddedParkaOne : PaddedParkaTwo}
              alt=""
              className="product-image"
            />
            {/* Next button */}
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>

        {/* Product Text Content */}
        <div className="text-content">
          {/* Product Heading */}
          <div className="heading">
            <h1>RUBBERISED PADDED PARKA</h1>
          </div>

          {/* Product Price */}
          <div className="product-price">
            <p>
              Rs. <span>7,800</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>

          {/* Product Description */}
          <div className="para">
            <p>
              Parka made of a fabric with a rubberised padded finish in its
              interior. Collar with an adjustable detachable hood. Long sleeves.
              Hip welt pockets and interior pocket detail. Zip-up front hidden
              by a snap-button placket.
            </p>
          </div>

          {/* Size Selection Boxes */}
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

          {/* Buy Button */}
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

export default PaddedParka;
