import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "./component/features/cart/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="px-80 py-10 flex flex-col gap-10 items-center max-sm:px-10 max-md:px-10">
      <h2 className="text-[40px] font-semibold">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-[20px] font-medium">No items in cart.</p>
      ) : (
        <div className="flex flex-col gap-10 w-full">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between max-md:flex-col gap-3">
              <div className="flex items-center gap-3 max-md:flex-col max-md:items-start">
                <img
                  src={item.image}
                  alt="product"
                  className="w-[100px] h-[100px] rounded max-md:w-full"
                />
                <div className="ml-4 max-md:ml-0">
                  <h2 className="font-semibold text-[22px]">{item.category}</h2>
                  <h2>
                    Price:
                    <span className="text-[19px] font-semibold ml-2 text-green-800">
                      ${item.price}
                    </span>
                  </h2>
                </div>
                <div className="ml-40 max-md:ml-0">
                  <h2 className="font-semibold text-[22px]">
                    Rate: {item.rating.rate}
                  </h2>
                  <h2>
                    Count:
                    <span className="text-[19px] font-semibold ml-2">
                      {item.rating.count}
                    </span>
                  </h2>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="p-2 bg-red-600 text-white rounded max-md:w-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
