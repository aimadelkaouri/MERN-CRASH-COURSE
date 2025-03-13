import React from "react";

export default function ProductListItem({product}){
    return (
        <div className="col-md-4 mb-2">
            <div className="card shadow-sm">
                <div className="row p-2">
                    <img src={product.image} alt="" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{product.name}</h5>
                            <h5 className="text-danger">{product.price}e</h5>
                        </div>
                        <p className="card-text">
                            {product.description} ...</p>
                        <button className="btn btn-sm btn-primary">
                            <i className="fas fa-cart-plus"></i>{ " "}
                            Add to cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}