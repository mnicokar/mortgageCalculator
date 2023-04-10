import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { DiGithubBadge } from "react-icons/di";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4" component="div">
            Mobin Financial <a style = {{textDecoration:'none', color:"inherit" }} href = "https://github.com/mnicokar/mortgageCalculator" > <DiGithubBadge /></a>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
