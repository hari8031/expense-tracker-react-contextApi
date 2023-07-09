import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ item }) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <div>
      <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
        {item.text}{" "}
        <span>
          {sign}$ {Math.abs(item.amount)}
        </span>
        <button className="delete-btn" onClick={()=>(deleteTransaction(item.id))}>x</button>
      </li>
    </div>
  );
};

export default Transaction;
