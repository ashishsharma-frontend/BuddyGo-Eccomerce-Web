import React, { useState } from "react";
import "../ColectionProductCss/Product.css";
import { Link } from "react-router-dom";
import CottonShirtOne from "../RealArtistImages/ProductImg/CottonShirtOne.jpg";
import CottonShirtTwo from "../RealArtistImages/ProductImg/CottenShirtTwo.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function CottonShirt() {
  // State to manage selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handler for size click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Handler for next image click
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  // Handler for previous image click
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  return (
    <div className="product-container">
      <div className="product-content">
        {/* Product Image Content */}
        <div className="product-img-content">
          <div className="image-wrapper">
            {/* Previous Button */}
            <span className="prev" onClick={handlePreviousClick}>
              <GrFormPrevious size={30} />
            </span>
            {/* Product Image */}
            <img
              src={currentImageIndex === 0 ? CottonShirtOne : CottonShirtTwo}
              alt=""
              className="product-image"
            />
            {/* Next Button */}
            <span className="next" onClick={handleNextClick}>
              <MdOutlineNavigateNext size={30} />
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-content">
          {/* Product Heading */}
          <div className="heading">
            <h1>LINEN - COTTON CARDIGAN</h1>
          </div>

          {/* Product Price */}
          <div className="product-price">
            <p>
              Rs. <span>3,500</span>
            </p>
            <span>MRP incl. of all taxes</span>
          </div>

          {/* Product Description */}
          <div className="para">
            <p>
              Loose-fitting cardigan made of a spun viscose and linen blend.
              Featuring a lapel collar, long sleeves and a button-up front.
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

export default CottonShirt;
