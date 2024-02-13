import React, { FC, useState } from "react";
import { MyInput } from "components";
import iconSearch from "assets/page-Search/iconSearch.webp";
import { SearchList } from "./components/SearchList/SearchList";
import { productsAPI } from "API/productsAPI";
import { useDebounce } from "hooks/useDebaunce";
import classes from "./Search.module.scss";

export const Search: FC = () => {
  const [searchProducts, setSearchProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce({
    callback: async (value: string) => {
      try {
        setIsLoading(true);
        const result = await productsAPI.getProductsSearch(value.toLowerCase());
        setSearchProducts(result?.product || []);
      } catch (error) {
        console.error("Error:", error);
        setSearchProducts([]);
      } finally {
        setIsLoading(false);
      }
    },
    delay: 500,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    debouncedSearch(inputValue);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchContainer}>
        <img src={iconSearch} alt="iconSearch" />
        <div className={classes.searchInput}>
          <MyInput
            placeholder="Еnter at least one word to search..."
            type="string"
            onChange={handleSearch}
          />
        </div>
      </div>
      {isLoading ? (
        <p className={classes.emptyText}>Loading...</p>
      ) : (
        <>
          {searchProducts.length ? (
            <SearchList product={searchProducts} />
          ) : (
            <p className={classes.emptyText}>No matches found</p>
          )}
        </>
      )}
    </div>
  );
};
