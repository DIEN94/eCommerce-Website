import React, { FC, useMemo, useState } from "react";
import { MyInput } from "components";
import { postsListShop } from "pages/Shop/components/ShopLayout/components/ProductListShop/config";
import iconSearch from "assets/page-Search/iconSearch.webp";
import { SearchList } from "./components/SearchList/SearchList";
import classes from "./Search.module.scss";

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const searchProducts = useMemo(() => {
    if (!searchValue) {
      return [];
    }

    return postsListShop.filter((product) =>
      product.productName.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <div className={classes.search}>
      <div className={classes.searchContainer}>
        <img src={iconSearch} alt="iconSearch" />
        <div className={classes.searchInput}>
          <MyInput
            placeholder="Search..."
            type="string"
            onChange={handleSearch}
          />
        </div>
      </div>
      {searchProducts.length ? (
        <SearchList searchProducts={searchProducts} />
      ) : (
        <p className={classes.emptyText}>No matches found</p>
      )}
    </div>
  );
};
