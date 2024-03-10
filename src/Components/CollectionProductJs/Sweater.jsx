import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ColectionProductCss/Product.css"; // Importing the CSS file
import SweaterOne from "../RealArtistImages/ProductImg/SweaterOne.jpg";
import SweaterTwo from "../RealArtistImages/ProductImg/SweaterTwo.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Functional component Sweater
function Sweater() {
  // State hooks for managing selected size and current image index
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Event handler for size click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Event handler for next image click
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  // Event handler for previous image click
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // JSX structure for the Sweater component
  return (
    <div className="product-container">
      <div className="product-content">
        <div className="product-img-content">
          {/* Image wrapper with navigation icons */}
          <div className="image-wrapper">
            {/* Previous icon */}
            <span className="prev" onClick={handlePreviousClick}>
              <GrFormPrevious size={30} />
            </span>
            {/* Product image */}
            <img
              src={currentImageIndex === 0 ? SweaterOne : SweaterTwo}
              alt=""
              className="product-image"
            />
            {/* Next icon */}
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>

        <div className="text-content">
          {/* Product heading */}
          <div className="heading">
            <h1>HOODED CROCHET SWEATER</h1>
          </div>

          {/* Product price */}
          <div className="product-price">
            <p>
              Rs. <span>4,500</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>

          {/* Product description */}
          <div className="para">
            <p>
              Open knit sweater. Collar with an adjustable hood. Long sleeves.
              Front pouch pocket. Ribbed trims.
            </p>
          </div>

          {/* Size selection boxes */}
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

          {/* Buy button */}
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

export default Sweater; // Exporting the Sweater component
