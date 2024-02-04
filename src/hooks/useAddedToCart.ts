import { useMemo } from "react";
import { useAppSelector } from "./redux";

export const useAddedToCart = (id?:string) => {

    const { cartList } = useAppSelector((state) => state.cart);

    let changeAddedToCart = useMemo(() => {
        let addedToCart = cartList.find((obj) => {
            if (!id) return false
          return obj.id === id;
        });
        return !!addedToCart;
      }, [cartList]);

      return changeAddedToCart
}