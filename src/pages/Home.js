import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData((initialFormData) => {
      return { ...initialFormData, [event.target.name]: event.target.value };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      navigate("/products");
    } else {
      alert("Passwords do not match");
    }
  };

  let day = "";
  if (day >= 5 && day <= 12) {
    day += "Good Morning, Sir/Madam ";
  } else if (day > 12 && day <= 17) {
    day += "Good day, Sir/Madam";
  } else if (day > 17 && day <= 24) {
    day += "Good Evening,Sir/Madam";
  } else {
    day += "Looks like someone is working night shifts.";
  }
  return (
    <Container fluid>
      <h1 style={{ paddingTop: "1rem" }}>Login page</h1>
      <h2 style={{ color: "gray", fontSize: "small" }}>{day}</h2>
      <form className="text-center" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Password
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="***"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="***"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          <input type="submit" className="btn btn-success" />
        </label>
      </form>
    </Container>
  );
};

export default Home;
