import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function transaction({ transaction }) {
    const { deletetransactionion } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction.id}>
            {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span> <button className="delete-btn"
                onClick={() => deletetransaction(transaction.id)}>X</button>
        </li>
    )
}