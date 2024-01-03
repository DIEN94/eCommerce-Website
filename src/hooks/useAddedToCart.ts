import { useMemo } from "react";
import { useAppSelector } from "./redux";

export const useAddedToCart = (id?:string | number) => {

    const { cartList } = useAppSelector((state) => state.cart);

    let changeAddedToCart = useMemo(() => {
        let addedToCart = cartList.find((obj) => {
            if (!id) return false
          return obj.id === (typeof id === 'number' ? id : parseInt(id, 10));
        });
        return !!addedToCart;
      }, [cartList]);

      return changeAddedToCart
}