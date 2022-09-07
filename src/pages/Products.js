// import { useState } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../Components/Card";
import data from "../data";

const Products = () => {
  const { products } = data;
  const [searchTerm, setSearchTerm] = useState("");

  const captureProductName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const date = new Date();
  const hours = date.getHours();

  let day = "";

  if (hours >= 5 && hours <= 12) {
    day += "Good Morning, Sir/Madam ";
  } else if (hours > 12 && hours <= 17) {
    day += "Good day, Sir/Madam";
  } else if (hours > 17 && hours <= 23) {
    day += "Good Evening,Sir/Madam";
  } else {
    day += "Looks like someone is working night shifts.";
  }

  return (
    <Container fluid>
      <h1>Our products</h1>
      <h2 style={{ color: "gray", fontSize: "small" }}>{day}</h2>
      <input
        type="search"
        value={searchTerm}
        className="form-control w-50"
        placeholder="Enter product name"
        onChange={captureProductName}
      />
      <br />
      <h2 style={{ marginTop: "2rem" }}>Product ranges</h2>
      <div className="horizontal-scroller">
        {filteredProducts.length === 0
          ? "no results found"
          : filteredProducts.map((product) => (
              <Cards
                key={product.id}
                image={product.image}
                alt={product.name}
                price={product.price}
                description={product.name}
                litres={product.litres}
                category={product.category}
                available={product.available}
              />
            ))}
      </div>
    </Container>
  );
};

export default Products;
