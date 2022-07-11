import {
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function CheckoutDetail({ cart, getItemPrice }) {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: "20px",
        padding: ".5rem",
        width: "70%",
      }}
    >
      <Box style={{ padding: "1rem" }}>
        <Typography className="gretting" variant="h6">
          👕 t-shirt
        </Typography>
        <List style={{ color: "white", width: "100%" }}>
          {cart.map(({ id, title, qty, price }) => (
            <ListItem key={id}>
              <ListItemText
                style={{
                  backgroundColor: "grey",
                  borderRadius: "10px",
                  color: "black",
                  width: "150px",
                  margin: "auto 20px",
                }}
                primary={qty + " ‣ " + title}
                secondary={qty + " × $" + price + "➡ $" + price * qty}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexDirection: "row",
            marginTop: 1,
          }}
        >
          <Typography variant="h7">Total: $ {getItemPrice}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
