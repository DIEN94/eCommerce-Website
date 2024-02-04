import React, { FC, useMemo, useState } from "react";
import { MyInput } from "components";
import iconSearch from "assets/page-Search/iconSearch.webp";
import { SearchList } from "./components/SearchList/SearchList";
import { useFetchProductsData } from "hooks/useFetchProductsData";
import classes from "./Search.module.scss";

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const page = 1;
  const limit = 18;

  const { productsList, totalPages } = useFetchProductsData(page, limit);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  const searchProducts = useMemo(() => {
    if (!searchValue) {
      return [];
    }

    return productsList.filter((product) =>
      product.name.toLowerCase().startsWith(searchValue.toLowerCase())
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
