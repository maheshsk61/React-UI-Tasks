import { useEffect, useMemo, useState } from "react";

const SearchAndFilter = () => {
  const [search, setSearch] = useState("");

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

  const filteredProducts = useMemo(() => {
    return (
      search &&
      productList.filter((value) => {
        return value.name.toLowerCase().includes(search.trim().toLowerCase());
      })
    );
  },[search]);

  const notFilteredProducts = useMemo(() => {
    return search
      ? productList.filter((value) => {
          return !value.name.toLowerCase().includes(search.trim().toLowerCase());
        })
      : productList;
  }, [search]);

  //filter + notfilter
  const mergedProducts = [...filteredProducts, ...notFilteredProducts];

  useEffect(() => {
    console.log("filteredProducts", filteredProducts);
  }, [filteredProducts]);

  useEffect(() => {
    console.log("notFilteredProducts", notFilteredProducts);
  }, [notFilteredProducts]);

  useEffect(() => {
    console.log("mergedProducts", mergedProducts);
  }, [mergedProducts]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {mergedProducts.length > 0 &&
        mergedProducts.map((value) => {
          return (
            <p
              key={value.id}
              style={{
                background: search
                  ? value.name
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                    ? "orange"
                    : "white"
                  : null,
                padding: "10px",
                borderRadius: 5,
              }}
            >
              {value.name}
            </p>
          );
        })}
    </div>
  );
};
export default SearchAndFilter;
