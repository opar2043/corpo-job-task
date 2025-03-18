import React, { useEffect, useState } from "react";

const Table = () => {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetch("/public/price.json")
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-center mb-3">
        Pricing Table{" "}
      </h2>
      <div className="overflow-x-auto border p-3 shadow-md rounded-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {price &&
              price.map((pr, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{pr.category}</td>
                  <td>{pr.price}$</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
