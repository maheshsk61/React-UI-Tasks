import React, { useEffect, useState } from "react";

const DropdownSelector = () => {
  const countries = [
    {
      name: "India",
      code: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakisthan",
      code: "PK",
      cities: ["Lahore", "Karachi"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountry = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    const selectedCountryData = countries.find((value) => {
      return value.code === countryCode;
    });
    console.log(`selectedCountryData ${JSON.stringify(selectedCountryData)}`)
    setCities(selectedCountryData ? selectedCountryData.cities : []);
  };

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  return (
    <div>
      <select onChange={handleCountry}>
        <option value="">Select a country</option>
        {countries.map((value, index) => {
          return (
            <option value={value.code} key={index}>
              {value.name}
            </option>
          );
        })}
      </select>
      {selectedCountry && cities.length > 0 && (
        <select>
          <option value="">Select a city</option>
          {cities.map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default DropdownSelector;
