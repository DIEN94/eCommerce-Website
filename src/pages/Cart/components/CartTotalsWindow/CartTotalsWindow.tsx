import { FC, useMemo } from "react";
import { MyButton } from "components";
import { useNavigate } from "react-router-dom";
import { currency } from "consts/consts";
import classes from "./CartTotalsWindow.module.scss";

type cartListType = {
  src: string[];
  name: string;
  price: number;
  id: string;
  quantity: number;
};

interface ICartTotalsWindowProps {
  cartList: cartListType[];
}

export const CartTotalsWindow: FC<ICartTotalsWindowProps> = ({ cartList }) => {
  const navigate = useNavigate();

  let totalSum = useMemo(() => {
    const sumProductPrices = (cartList: cartListType[]) => {
      const newTotalSum = cartList.reduce((accumulator, product) => {
        return accumulator + product.quantity * product.price;
      }, 0);
      localStorage.setItem("totalSum", `${newTotalSum}`);
      return newTotalSum;
    };

    const newTotalSumPrice = sumProductPrices(cartList);
    return newTotalSumPrice;
  }, [cartList]);

  const CheckOut = () => {
    const totalSumLS = localStorage.getItem("totalSum");
    if (totalSumLS) {
      const parseTotalSumLS = JSON.parse(totalSumLS);
      if (parseTotalSumLS !== 0) {
        navigate("/checkout");
      } else {
        alert("First, please add the product to your cart!");
        navigate("/shop");
      }
    }
  };

  return (
    <div className={classes.cartTotalsContainer}>
      <p className={classes.cartTotalHeaderText}>Cart Totals</p>
      <div className={classes.totalContainer}>
        <p>Total</p>
        <p>{totalSum ? `${totalSum}.00 ${currency}` : "-"}</p>
      </div>
      <MyButton
        variant="no-fill"
        className={classes.buttonCheckOut}
        onClick={CheckOut}
      >
        Check Out
      </MyButton>
    </div>
  );
};
