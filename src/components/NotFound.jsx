import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CloudOffIcon from "@mui/icons-material/CloudOff";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        marginTop: 1,
        marginBottom: 12,
        gap: 3,
      }}
    >
      <CloudOffIcon sx={{ fontSize: "200px", margin: "2rem" }} />

      <Typography className="gretting" variant="h5">
        NOT FOUND
      </Typography>

      <Link to={"/"}>
        <button> ♻ HOME </button>
      </Link>
    </Box>
  );
}
