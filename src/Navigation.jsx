import { useContext } from "react";
import { ProductContext } from "./ProductContext";




const Navigation = () => {
  const { priceSort, setPriceSort, setFilter, filter } =
    useContext(ProductContext);

  const handlePriceSort = () => {
    if (priceSort !== "high") {
      setPriceSort("high")
    } else if (priceSort !== "low") {
      setPriceSort("low")
    }
  }


  return (
    <div className="p-3 gap-3 d-flex justify-content-center">
      <button
        onClick={() => setFilter("all")}
        className={`btn btn${filter !== "all" ? "-outline" : ""}-primary`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("cookie")}
        className={`btn btn${filter !== "cookie" ? "-outline" : ""}-warning`}
      >
        Cookies
      </button>
      <button
        onClick={() => setFilter("drink")}
        className={`btn btn${filter !== "drink" ? "-outline" : ""}-success`}
      >
        Drinks
      </button>
      <div className="ms-2 d-flex gap-1">
        <button onClick={handlePriceSort} className={`btn btn${priceSort ? "" : "-outline"}-dark position-relative`}>
          <i className={`bi bi-graph-${priceSort === "low" ? "down" : "up"}-arrow`}></i>
          {priceSort && (
            <span onClick={() => setPriceSort(false)} className="position-absolute z-3 top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <i className="bi bi-x-lg"></i>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
export default Navigation;
