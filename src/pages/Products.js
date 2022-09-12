// import { useState } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../Components/Card";
import data from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "../index.css";
import { A11y, Pagination } from "swiper";

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
      <Swiper
        modules={[A11y, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {filteredProducts.length === 0
          ? "no results found"
          : filteredProducts.map((item) => (
              <SwiperSlide key={item.id}>
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
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  );
};

export default Products;
