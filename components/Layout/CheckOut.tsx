import classes from "./CheckOut.module.css";

type Price = {
  price: string;
  onCancel: () => void;
  onProceed: () => void;
};

const CheckOut: React.FC<Price> = ({ price, onCancel, onProceed }) => {
  return (
    <div className={classes["checkout-container"]}>
      <h4>
        Your total price is{" "}
        <span className={classes.price}>&#8358; {price}</span>
        <br /> Proceed to checkout?
      </h4>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onProceed}>OK</button>
    </div>
  );
};

export default CheckOut;
