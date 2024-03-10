// Import necessary modules and styles
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ColectionProductCss/Product.css"; // Assuming this is the path to your CSS file
import PoloShirtOne from "../RealArtistImages/ProductImg/PoloShirtOne.jpg";
import PoloShirtTwo from "../RealArtistImages/ProductImg/PoloShirtTwo.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Functional component for the Polo Shirt
function poloshirt() {
  // State variables for selected size and current image index
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Event handler for size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Event handler for next image
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  // Event handler for previous image
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // JSX for the Polo Shirt component
  return (
    <div className="product-container">
      <div className="product-content">
        {/* Product Image Section */}
        <div className="product-img-content">
          <div className="image-wrapper">
            <span className="prev" onClick={handlePreviousClick}>
              <GrFormPrevious size={30} />
            </span>
            <img
              src={currentImageIndex === 0 ? PoloShirtOne : PoloShirtTwo}
              alt=""
              className="product-image"
            />
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="text-content">
          {/* Product Heading */}
          <div className="heading">
            <h1>STRIPED TEXTURED POLO SHIRT</h1>
          </div>

          {/* Product Price */}
          <div className="product-price">
            <p>
              Rs. <span>2,500</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>

          {/* Product Description */}
          <div className="para">
            <p>
              Collared polo shirt with a front opening. Short sleeves. Ribbed hem.
            </p>
          </div>

          {/* Size Selection Boxes */}
          <div className="size-boxes">
            {["m", "xl", "l", "s"].map((size) => (
              <div
                key={size}
                className={`size-box ${selectedSize === size ? "selected" : ""}`}
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

// Export the component
export default poloshirt;
