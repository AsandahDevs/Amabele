// import { useState } from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
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

  //  A function that will handle the functionality of the directional arrows.
  useEffect(() => {
    const containedElements = [
      ...document.querySelectorAll(".horizontal-scroller.container"),
    ];
    const nextBtn = [...document.querySelectorAll(".next-btn")];
    const prevBtn = [...document.querySelectorAll(".prev-btn")];

    containedElements.forEach((element, index) => {
      let containerDimensions = element.getBoundingClientRect(); // retrieves the dimensions of the contained elements.
      let containerWidth = containerDimensions.width;

      nextBtn[index].addEventListener("click", () => {
        element.scrollLeft += containerWidth;
      });
      // This makes an arrow button scroll in a negative direction, therefore creating a "left" scroll effect.
      prevBtn[index].addEventListener("click", () => {
        element.scrollLeft -= containerWidth;
      });
    });
  }, []);
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
      <div className="horizontal-scroller container">
        <span className="prev-btn">
          <ChevronLeft
            style={{ color: "hotpink", marginRight: "2rem", fontSize: "2rem" }}
          />
        </span>
        {filteredProducts.length === 0
          ? "no results found"
          : filteredProducts.map((item) => (
              <Cards
                key={item.id}
                image={item.image}
                alt={item.name}
                price={item.price}
                description={item.name}
                litres={item.litres}
                category={item.category}
                available={item.available}
                item={item}
              />
            ))}
        <span className="next-btn">
          <ChevronRight
            style={{ color: "hotpink", marginLeft: "2rem", fontSize: "2rem" }}
          />
        </span>
      </div>
    </Container>
  );
};

export default Products;
