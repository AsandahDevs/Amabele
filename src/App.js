import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";
import { CartProvider } from "react-use-cart";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (event) => {
    setFormData((initialFormData) => {
      return { ...initialFormData, [event.target.name]: event.target.value };
    });
  };

  const handlePasswordChange = () => {
    setFormData((initialFormData) => {
      return { ...initialFormData, showPassword: !formData.showPassword };
    });
  };

  const handlePasswordChange2 = () => {
    setFormData((initialFormData) => {
      return {
        ...initialFormData,
        showConfirmPassword: !formData.showConfirmPassword,
      };
    });
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <Home
                  formData={formData}
                  handleChange={handleChange}
                  handlePasswordChange={handlePasswordChange}
                  handleConfirmPassword={handlePasswordChange2}
                />
              }
            />
            <Route path="products" element={<Products formData={formData} />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
