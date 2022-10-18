import { Container } from "react-bootstrap";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.formData.password === props.formData.confirmPassword) {
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
            onChange={props.handleChange}
            value={props.formData.username}
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Password
          <div className="input-group">
            <input
              type={props.formData.showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="***"
              onChange={props.handleChange}
              value={props.formData.password}
              required
            />
            <span
              className="input-group-text"
              onClick={props.handlePasswordChange}
            >
              {props.formData.showPassword ? <EyeFill /> : <EyeSlashFill />}
            </span>
          </div>
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Confirm password
          <div className="input-group">
            <input
              type={props.formData.showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="form-control"
              placeholder="***"
              onChange={props.handleChange}
              value={props.formData.confirmPassword}
              required
            />
            <span
              className="input-group-text"
              onClick={props.handleConfirmPassword}
            >
              {props.formData.showConfirmPassword ? (
                <EyeFill />
              ) : (
                <EyeSlashFill />
              )}
            </span>
          </div>
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          <input type="submit" className="btn btn-success" value="login" />
        </label>
      </form>
    </Container>
  );
};

export default Home;
