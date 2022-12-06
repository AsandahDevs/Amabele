import { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../Components/Card";
import data from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Pagination } from "swiper";
import {
  BrightnessAltHighFill,
  CloudSunFill,
  MoonStarsFill,
  EmojiDizzyFill,
} from "react-bootstrap-icons";
//import react bootstrap icons to display icons depending on the time of day.

const Products = (props) => {
  const { products } = data;
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const captureProductName = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const captureCategory = (e) => {
    setCategory(e.target.value);
  };

  const filteredProductsByCategory = products.filter((product) => {
    return product.category.toLowerCase().includes(category.toLowerCase());
  });

  const date = new Date();
  const hours = date.getHours();

  let emoji;

  if (hours >= 5 && hours <= 12) {
    emoji = (
      <BrightnessAltHighFill style={{ fontSize: "1rem", color: "yellow" }} />
    );
  } else if (hours > 12 && hours <= 17) {
    emoji = <CloudSunFill style={{ fontSize: "1rem", color: "yellow" }} />;
  } else if (hours > 17 && hours <= 23) {
    emoji = <MoonStarsFill style={{ fontSize: "1rem", color: "blue" }} />;
  } else {
    emoji = <EmojiDizzyFill style={{ fontSize: "1rem", color: "pink" }} />;
  }

  let day = "";

  if (hours >= 5 && hours <= 12) {
    day += `Good Morning, ${props.formData.username}`;
  } else if (hours > 12 && hours <= 17) {
    day += `Good Day, ${props.formData.username}`;
  } else if (hours > 17 && hours <= 23) {
    day += `Good Evening, ${props.formData.username}`;
  } else {
    day += `Shouldn't you be asleep,${props.formData.username}?`;
  }

  return (
    <Container fluid>
      <h1>Our Products</h1>
      <h2 style={{ color: "whitesmoke", fontSize: "medium" }}>
        {day} {emoji}
      </h2>
      <input
        type="search"
        value={searchTerm}
        className="form-control w-50"
        placeholder="Enter product name"
        onChange={captureProductName}
      />
      <br />
      <select value={category} onChange={captureCategory}>
        <option>Select by category</option>
        <option>Cider</option>
        <option>Whiskey</option>
        <option>Vodka</option>
        <option>Stout</option>
        <option>Wine</option>
      </select>
      <br />
      <h2 style={{ marginTop: "2rem" }}>Product ranges</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
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
          : filteredProducts.map((item) => {
              return (
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
              );
            })}

        {
          /* Mapping through the filtered products based on the choice of catergory selected by a user.*/
          /* BUG: The below code does not work alongside with the above search feature .*/

          filteredProductsByCategory.length === 0
            ? "no results found"
            : filteredProductsByCategory.map((item) => {
                return (
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
                );
              })
        }
      </Swiper>
    </Container>
  );
};

export default Products;
