import React, { useState } from "react";

const Pagination = () => {
  const productList = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Smartwatch" },
    { id: 5, name: "Headphones" },
    { id: 6, name: "Keyboard" },
    { id: 7, name: "Mouse" },
    { id: 8, name: "Monitor" },
    { id: 9, name: "Charger" },
    { id: 10, name: "External Hard Drive" },
    { id: 11, name: "Bluetooth Speaker" },
    { id: 12, name: "Webcam" },
    { id: 13, name: "Flash Drive" },
    { id: 14, name: "Camera" },
    { id: 15, name: "Smart TV" },
    { id: 16, name: "Gaming Console" },
    { id: 17, name: "Smart Thermostat" },
    { id: 18, name: "E-Reader" },
    { id: 19, name: "Portable Projector" },
    { id: 20, name: "Electric Toothbrush" },
  ];
  const noOfProductsPerPage = 5;
  const products = productList;
  const [page, setPage] = useState(1);
  const paginationLogic = [...Array(products.length / 5)];
  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage <= paginationLogic.length &&
      selectedPage >= 1 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div className="App">
      <style>
        {`
            .pagination-selected {
              background-color:black;
              color:white;
            }
              .button-hide {
                opacity:0;
              }
        `}
      </style>
      {products &&
        products.length > 0 &&
        products
          .slice(
            page * noOfProductsPerPage - noOfProductsPerPage,
            page * noOfProductsPerPage
          )
          .map((product, index) => {
            return (
              <div className="products" key={product.id}>
                <h1>
                  {index + 1} {product.name}
                </h1>
              </div>
            );
          })}
      <div className="pagination">
        <span>
          <button
            className={page === 1 ? "button-hide" : undefined}
            onClick={() => {
              selectedPageHandler(page - 1);
            }}
          >
            ◀️
          </button>
        </span>
        {paginationLogic.map((_, index) => {
          return (
            <span key={index}>
              <button
                className={
                  page === index + 1 ? "pagination-selected" : undefined
                }
                onClick={() => {
                  selectedPageHandler(index + 1);
                }}
              >
                {index + 1}
              </button>
            </span>
          );
        })}
        <span>
          <button
            className={
              page === paginationLogic.length ? "button-hide" : undefined
            }
            onClick={() => {
              selectedPageHandler(page + 1);
            }}
          >
            ▶️
          </button>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
