import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";

const Home = () => {
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
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      navigate("/Amabele/products");
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
          <div className="input-group">
            <input
              type={formData.showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="***"
              onChange={handleChange}
              value={formData.password}
              required
            />
            <span className="input-group-text" onClick={handlePasswordChange}>
              {formData.showPassword ? <EyeFill /> : <EyeSlashFill />}
            </span>
          </div>
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Confirm password
          <div className="input-group">
            <input
              type={formData.showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control"
              placeholder="***"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            <span className="input-group-text" onClick={handlePasswordChange2}>
              {formData.showConfirmPassword ? <EyeFill /> : <EyeSlashFill />}
            </span>
          </div>
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
