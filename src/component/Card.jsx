import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./features/cart/cartSlice";

const Card = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => setData(res.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="px-52 py-10 grid grid-cols-3 gap-5 items-center justify-center max-sm:px-10 max-md:px-20 max-sm:grid-cols-1 max-md:grid-cols-2">
      {data.map((product) => (
        <div
          key={product.id}
          className="p-5 rounded hover:border-2 hover:shadow-xl"
        >
          <div>
            <img
              src={product.image}
              alt="product"
              className="w-[100%] h-[250px] rounded"
            />
            <div className="flex flex-col gap-3 mt-5">
              <h2 className="font-semibold text-[22px]">{product.category}</h2>
              <h2>
                Price:
                <span className="text-[19px] font-semibold ml-2 text-green-800">
                  ${product.price}
                </span>
              </h2>
              <button
                onClick={() => handleAddToCart(product)}
                className="p-3 bg-blue-700 text-white rounded w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
