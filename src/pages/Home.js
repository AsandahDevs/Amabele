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

  return (
    <Container fluid>
      <h1 style={{ paddingTop: "1rem" }}>Login page</h1>
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
