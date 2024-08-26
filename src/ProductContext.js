import { createContext, useState } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const products = [
        {
            name: "Qızıl alma",
            category: "cookie",
            price: 50,
        },
        {
            name: "Haribo",
            category: "cookie",
            price: 10,
        },
        {
            name: "Coca-Cola",
            category: "drink",
            price: 2,
        },
        {
            name: "Fanta",
            category: "drink",
            price: 5,
        },
        {
            name: "Balıq",
            category: "cookie",
            price: 5,
        },
        {
            name: "Kofe",
            category: "drink",
            price: 12,
        },
    ];

    const [filter, setFilter] = useState("all");
    const [priceSort, setPriceSort] = useState(false);

    return (
        <ProductContext.Provider
            value={{ products, filter, setFilter, priceSort, setPriceSort }}
        >

            {children}
        </ProductContext.Provider>



    )







}