import { FC, useMemo } from "react";
import { MyButton } from "components";
import { useNavigate } from "react-router-dom";
import classes from "./CartTotalsWindow.module.scss";

type cartListType = {
  src: string;
  ProductName: string;
  ProductPrice: string;
  id: number;
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
        const priceString = product.ProductPrice.replace("Rp ", "");
        const priceNumber = parseFloat(priceString.replace(/\./g, ""));
        const quantity = product.quantity ? product.quantity : 0;
        return accumulator + quantity * priceNumber;
      }, 0);
      localStorage.setItem("totalSum", `${newTotalSum}`);
      return newTotalSum.toLocaleString("en-US");
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
        <p>{`Rp ${totalSum}`}.00</p>
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
