// Importing React and useState from React library
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Importing CSS file for styling
import "../ColectionProductCss/Product.css";

// Importing images for the product
import TrouserOne from "../RealArtistImages/ProductImg/TrouserOne.jpg";
import TrouserTwo from "../RealArtistImages/ProductImg/TrouserTwo.jpg";

// Importing icons for next and previous buttons
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Functional component for the Trouser product
function Trouser() {
  // State for selected size and current image index
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handler for size click event
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handler for next image click event
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  // Handler for previous image click event
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // JSX structure for the Trouser component
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
              src={currentImageIndex === 0 ? TrouserOne : TrouserTwo}
              alt=""
              className="product-image"
            />
            {/* Next button */}
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          {/* Product Heading */}
          <div className="heading">
            <h1>COTTON - LINEN TROUSERS</h1>
          </div>

          {/* Product Price */}
          <div className="product-price">
            <p>
              Rs. <span>1,800</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>

          {/* Product Description */}
          <div className="para">
            <p>
              Regular fit trousers made of a cotton and linen blend fabric.
              Adjustable inner elasticated waistband. Front and back pockets.
            </p>
          </div>

          {/* Size Options */}
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

// Exporting the Trouser component as the default export
export default Trouser;
