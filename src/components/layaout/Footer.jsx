import { Link, Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        marginTop: "12rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          marginBottom: ".5rem",
        }}
      >
        <Link color="inherit" href="#" underline="hover">
          {" "}
          ◽Work with us{" "}
        </Link>

        <Link color="inherit" href="#" underline="hover">
          {" "}
          ◽Terms and conditions{" "}
        </Link>

        <Link color="inherit" href="#" underline="hover">
          {" "}
          ◽Terms and conditions{" "}
        </Link>

        <Link color="inherit" href="#" underline="hover">
          {" "}
          ◽Information{" "}
        </Link>

        <Link color="inherit" href="#" underline="hover">
          {" "}
          ◽Consumer Defense{" "}
        </Link>
      </Typography>

      <Divider
        style={{ width: "50%", margin: ".4rem", borderColor: grey[800] }}
      />
      <Typography variant="body2">Copyright © 2022 FedeRotondo</Typography>
    </Box>
  );
}
