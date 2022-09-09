import { Container } from "react-bootstrap";
import { useCart } from "react-use-cart";
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
                  <td>Quantity: {item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default ShoppingCart;
