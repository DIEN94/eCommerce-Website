import React, { FC, useMemo, useState } from "react";
import { postsListShop } from "pages/Shop/components/ShopLayout/components/ProductListShop/config";
import { useParams } from "react-router-dom";
import { HeaderPage } from "./components/HeaderPage/HeaderPage";
import { MyButton } from "components";
import { Link } from "react-router-dom";
import { cartFetchingError, cartFetchingSuccess } from "store/reducers/cart";
import { useAddedToCart } from "hooks/useAddedToCart";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import classes from "./Product.module.scss";

export const Product: FC = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);
  const { id } = useParams();

  let addedToCart: boolean = useAddedToCart(id);

  const product = id
    ? postsListShop.find((item) => item.id === parseInt(id, 10))
    : undefined;

  if (!product) {
    return <NotFoundPage />;
  }

  const handleMinus = () => {
    if (quantity === 1) {
      return;
    }
    const updatedCartList = cartList.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity - 1 } : item
    );
    dispatch(cartFetchingSuccess(updatedCartList));
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    const updatedCartList = cartList.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity + 1 } : item
    );
    dispatch(cartFetchingSuccess(updatedCartList));
    setQuantity(quantity + 1);
  };

  const addToCart = (
    src: string,
    productName: string,
    productPrice: string,
    id: number
  ) => {
    const newItem = {
      src: src,
      productName: productName,
      productPrice: productPrice,
      id: id,
      quantity: quantity,
    };

    try {
      const cartListToken = localStorage.getItem("CartArray");
      if (cartListToken) {
        const storedCartArray = JSON.parse(cartListToken);
        storedCartArray.push(newItem);
        dispatch(cartFetchingSuccess(storedCartArray));
      } else {
        dispatch(cartFetchingError("Error"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.product}>
      <HeaderPage productName={product.productName} />
      <div className={classes.productContainer}>
        <div className={classes.productImg}>
          <img src={product.src} alt={`${product.src}`} />
        </div>
        <div className={classes.productInfo}>
          <h1 className={classes.productNameText}>{product.productName}</h1>
          <p className={classes.productPriceText}>{product.fixPrice}</p>
          <p className={classes.productDescription}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className={classes.controlContainer}>
            <div className={classes.quantityContainer}>
              <MyButton
                className={classes.buttonQuantity}
                variant="no-fill"
                type="button"
                onClick={handleMinus}
              >
                -
              </MyButton>
              <p className={classes.textQuantity}>{quantity}</p>
              <MyButton
                className={classes.buttonQuantity}
                variant="no-fill"
                type="button"
                onClick={handlePlus}
              >
                +
              </MyButton>
            </div>
            {addedToCart ? (
              <Link to={"/cart"}>
                <MyButton variant="no-fill" className={classes.buttonCart}>
                  Go to cart
                </MyButton>
              </Link>
            ) : (
              <MyButton
                variant="no-fill"
                className={classes.buttonCart}
                onClick={() =>
                  addToCart(
                    product.src,
                    product.productName,
                    product.fixPrice,
                    product.id
                  )
                }
              >
                Add to cart
              </MyButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
