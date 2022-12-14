import React from "react";
import { useShoppingCart } from "use-shopping-cart";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Formats the value to a currency string
 */
const formatCurrencyString = (value, currency) => {
  // console.log(value, currency);
  const price = (value / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency,
  });
  return numberFormat.format(price);
};



export function Products(props) {
  const { addItem } = useShoppingCart();
  const notify = (productName) =>
    toast.success(productName + " added to the cart!", {
      position: "top-left", // top-right, top-center, bottom-left, bottom-right, bottom-center
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", // dark, light, colored
    });

  return (
    <>
      <div className="flex justify-center mt-2">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl md:max-w-7xl px-2 sm:px-6 lg:px-8 py-4 md:py-4 md:px-2">
            <h2 className="text-4xl font-bold text-gray-600 mt-2 mb-6">
              Our fruits collection
            </h2>
            <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {props.product.map((product) => (
                <div key={product.name}>
                  <div className="relative">
                    <div className="relative h-52 w-full overflow-hidden rounded-lg border-solid border-slate-100 border">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                      </h3>
                      {/* <p className="mt-1 text-xs text-gray-500">{product.description}</p> */}
                    </div>
                    <div className="absolute inset-x-0 top-0 flex h-52 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {formatCurrencyString(product.price, product.currency)}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <button
                      type="button"
                      className="grow rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      onClick={() => {addItem(product); notify(product.name)}}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
