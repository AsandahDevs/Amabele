import { Button, Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Badge } from "react-bootstrap";

const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container>
      <h1>Shopping cart page</h1>
      {isEmpty ? (
        <h2 style={{ color: "red" }}>Cart is empty</h2>
      ) : (
        <>
          <table className="table table-dark table-hover m-0">
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
          <h3
            style={{
              color: "GrayText",
              fontSize: "1.5rem",
              marginLeft: "55rem",
            }}
          >
            Cart total:R {cartTotal}
          </h3>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
