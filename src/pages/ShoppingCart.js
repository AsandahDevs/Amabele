import { Button, Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Badge } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

const ShoppingCart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container fluid>
      <h1>Shopping cart page</h1>
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
                      <td>
                        <Button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>{" "}
                        Quantity: {item.quantity}{" "}
                        <Button
                          variant="outline-warning"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                      </td>
                      <td>
                        <Badge
                          bg="danger"
                          onClick={() => removeItem(item.id)}
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
              color: "GrayText",
              fontSize: "1.5rem",
            }}
          >
            Cart total:R {cartTotal}
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
