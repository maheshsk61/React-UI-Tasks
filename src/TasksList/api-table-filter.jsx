import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchApiData = () => {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handle = async () => {
      try {
        const res = await axios.get("http://18.141.102.143:8081/api/tutorials");
        console.log(res.data);
        setApi(res.data);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    };
    handle();

    // axios
    //   .get("http://18.141.102.143:8081/api/tutorials")
    //   .then((res) => {
    //     console.log(res.data);
    //     setApi(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }, []);

  const filter = search
    ? api.filter((value) => {
        return (
          //   value.id == Number(search) ||
          String(value.id).toLowerCase().includes(search) ||
          value.title.toLowerCase().includes(search) ||
          value.description.toLowerCase().includes(search) ||
          (search.toLowerCase() === "true" && value.published) ||
          (search.toLowerCase() === "false" && !value.published) ||
          value.createdAt.toLowerCase().includes(search) ||
          value.updatedAt.toLowerCase().includes(search)
        );
      })
    : api;
  console.log(filter);

  useEffect(() => {
    console.log(api);
  }, [api]);

  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        style={{
          padding: "10px",
          width: "10%",
          display: "block",
          margin: "5px auto",
        }}
      />
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          margin: "0 auto",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>id</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              title
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              description
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              published
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              createdAt
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              updatedAt
            </th>
          </tr>
        </thead>
        <tbody>
          {filter.length > 0 &&
            filter.map((value, i) => {
              return (
                <tr
                  key={i}
                  style={{ backgroundColor: i % 2 === 1 ? "white" : "grey" }}
                >
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.id}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.title}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.description}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.published ? "true" : "false"}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.createdAt}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {value.updatedAt}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchApiData;
