// import { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../Components/Card";
import data from "../data";

const Products = () => {
  const { products } = data;
  return (
    <Container fluid>
      <h1>Our products</h1>
      <input
        type="search"
        className="form-control w-50"
        placeholder="Enter product name"
      />
      <br />
      <select>
        <option>Sort by category</option>
        <option>Cider</option>
        <option>Stout</option>
        <option>Wine</option>
        <option>Vodka</option>
        <option>Whiskey</option>
        <option>Other</option>
      </select>
      <br />
      <h2 style={{ marginTop: "2rem" }}>Product ranges</h2>
      <div className="horizontal-scroller">
        {products.map((product) => (
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
