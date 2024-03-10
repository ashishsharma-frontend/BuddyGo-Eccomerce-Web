import React from "react";
import "./WebCssFiles/TheCollection.css";
import "./WebCssFiles/Unsed.css";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa6";
import { RxDoubleArrowRight } from "react-icons/rx";
import CottonTrouser from "./RealArtistImages/CollectionImg/COTTON -LINETROUSERS.jpg";
import LinePoloShirt from "./RealArtistImages/CollectionImg/STRIPEDTEXTUREDPOLOSHIRT.jpg";
import BermudaShort from "./RealArtistImages/CollectionImg/FADEDJOGGINGBERMUDASHORTS.jpg";
import Sweater from "./RealArtistImages/CollectionImg/HOODEDCROCHETSWEATER.jpg";
import CottonShirt from "./RealArtistImages/CollectionImg/LINEN -COTTONCARDIGAN.jpg";
import PaddedParka from "./RealArtistImages/CollectionImg/RUBBERISEDPADDEDPARKA.jpg";

const collectionItems = [
  {
    name: "COTTON TROUSERS",
    image: CottonTrouser,
    price: 3000,
    link: "/trouser",
  },
  {
    name: "STRIPED POLO SHIRT",
    image: LinePoloShirt,
    price: 2500,
    link: "/poloshirt",
  },
  {
    name: "BERMUDA SHORT",
    image: BermudaShort,
    price: 2200,
    link: "/bermudashort",
  },
  {
    name: "CROCHET SWEATER",
    image: Sweater,
    price: 4500,
    link: "/sweater",
  },
  {
    name: "COTTON CARDIGAN",
    image: CottonShirt,
    price: 3500,
    link: "/cottonshirt",
  },
  {
    name: "PADDED PARKA",
    image: PaddedParka,
    price: 7800,
    link: "/paddedparka",
  },
];

function TheCollection() {
  return (
    <div className="collection">
      <div className="border"></div>
      <div className="heading">
        <h1>The Collection</h1>
      </div>
      <div className="collection-content">
        <div className="collections-card">
          {collectionItems.map((item, index) => (
            <div className="card" key={index}>
              <Link to={item.link}>
              <div className="collection-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="price">
                <p>
                  <FaRupeeSign /> <span>{item.price}</span>
                </p>
              </div>
              <span className="name">
                <Link to={item.link}>
                  <p>
                    {item.name}{" "}
                    <span>
                      <RxDoubleArrowRight />
                    </span>
                  </p>
                </Link>
              </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TheCollection;
