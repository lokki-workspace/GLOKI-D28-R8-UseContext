import React, { useContext, useState } from "react";
import { myContext } from "../ContextComponent";


const Total = () => {
  const { cartData} = useContext(myContext);
  let totalQuan = cartData.reduce(
    (initVal, cart) => initVal + (cart.quantity || 1),
    0
  );
  let totalAmount = cartData.reduce(
    (initVal, cart) => initVal + cart.price * (cart.quantity || 1),
    0
  );

  return (
    <>
      <div className="row bg-dark py-2 text-light fw-bold sticky-div mb-4">
        <div className="col-4 text-center d-flex justify-content-center align-items-center">
          Total Quantity : {totalQuan}
        </div>
        <div className="col-4 text-center d-flex justify-content-center align-items-center">
          Total Amount : $ {totalAmount}.00
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <a type="button" className="btn btn-warning">
            Proceed to Pay
          </a>
        </div>
      </div>
    </>
  );
};

export default Total;