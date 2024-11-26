import React from "react";
import './card.css'
const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
  } = product;

  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      {/* Product Image */}
      <div className="card-img-top overflow-hidden position-relative">
        <img
          src={thumbnail}
          className="img-fluid imgcontainer"
          alt={title}
        />
        <span
          className={`badge position-absolute top-0 start-0 m-2 px-3 py-1 ${
            stock > 10 ? "bg-success" : "bg-danger"
          }`}
          style={{ fontSize: "0.8rem" }}
        >
          {stock > 10 ? "In Stock" : "Low Stock"}
        </span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-muted small">
          {description.length > 50 ? description.substring(0, 50) + "..." : description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-primary fw-bold m-0">${price.toFixed(2)}</h6>
          <span className="text-danger small">-{discountPercentage}%</span>
        </div>
        <p className="rating small mt-2">Rating: ⭐ {rating}</p>
      </div>

      {/* Card Footer */}
      <div className="card-footer bg-white border-0">
        <button className="btn btn-primary w-100">View Product</button>
      </div>
    </div>
  );
};



export default ProductCard;
