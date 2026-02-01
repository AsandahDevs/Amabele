import { Button, Container } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { useSelector, useDispatch} from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isEmpty = cartItems.length === 0;
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container fluid>
      <h1>Shopping cart</h1>
      {isEmpty ? (
        <h2 style={{ color: "red" }}>Cart is empty</h2>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-dark table-hover table-striped ">
              <tbody>
                {items.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "6rem" }}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>Unit price: R{item.price}</td>
                      <td style={{ fontSize: "15px" }}>
                        <Button
                          size="sm"
                          onClick={() =>
                            dispatch(increaseQty(item))
                          }
                        >
                          +
                        </Button>{" "}
                        Quantity: {item.quantity}{" "}
                        <Button
                          size="sm"
                          variant="outline-warning"
                          onClick={() =>
                            dispatch(decreaseQty(item))
                          }
                        >
                          -
                        </Button>
                      </td>
                      <td>
                        <Badge
                          bg="danger"
                          onClick={() => dispatch(removeItem(item))}
                          style={{ cursor: "pointer" }}
                        >
                          x
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h3
            style={{
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            Cart total:R {cartTotal.toFixed(2)}
          </h3>
          <Button
            size="sm"
            className="btn btn-danger"
            onClick={() => emptyCart()}
          >
            Clear cart <Cart4 />
          </Button>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
