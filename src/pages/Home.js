import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <Container fluid>
      <h1 style={{ paddingTop: "1rem" }}>Homepage</h1>
      <form className="text-center">
        <label>
          Username
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Password
          <input
            type="password"
            name="username"
            className="form-control"
            placeholder="***"
            required
          />
        </label>
        <br />
        <label style={{ marginTop: "2rem" }}>
          Confirm password
          <input
            type="password"
            name="username"
            className="form-control"
            placeholder="***"
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
