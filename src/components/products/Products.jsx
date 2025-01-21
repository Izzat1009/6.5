import React, { useEffect, useState } from "react";
// import axios from "axios";
import { request } from "../../api";
import "./products.css"
import Loading from "../loading/Loading";


const Products = () => {
  const limit = 4
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true);
    request
      .get("/products", {
       params:{
        limit,
        skip: count * limit

       }
      })

      .then((res) => setProducts([...products, ...res.data.products]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return (
    <div>

      <div className="grids">
        {products?.map((product) => (
          <div key={product.id} className="grid__items">
            <img
              src={product.thumbnail}
              className="grid__img"
              alt={product.title}
            />
            <h2 className="grid__title">{product.title}</h2>
          </div>
        ))}
      </div>
      {loading && <Loading count={limit} />}
      <button className="block mx-auto mt-4 " onClick={()=> setCount(count+1)}>See more</button>
    </div>
  );
};

export default Products;
