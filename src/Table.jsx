
import { useContext } from "react";
import { ProductContext } from "./ProductContext";


const Table = () => {
  const { products, filter, priceSort } = useContext(ProductContext)

  let filteredProducts = products.filter((p) => {
    return p.category === filter || filter === "all";
  });

  if (priceSort) {
    filteredProducts = filteredProducts.sort((a, b) => {
      if (priceSort === "high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return (
    <table className="table table-info table-striped border">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Qiymət</th>
          {filter === "all" && <th scope="col">Kateqoriya</th>}
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((p, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{p.name}</td>
              <td>{p.price}</td>
              {filter === "all" && <td>{p.category}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
