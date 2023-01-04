import { AppBar, Container, Toolbar, InputBase, Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';
import CategorySelectorComponent from "./CategorySelectorComponent";
import logo from "../assets/logo.png";
import ShoppingBasketComponent from "./ShoppingBasketComponent";

function AppBarComponent() {
    return (
      <AppBar sx={{ py: .5 }} elevation={0} position="static" color="secondary">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <img src={logo} alt="app logo" height="30" />
            <Container maxWidth="xl">
              <Paper
                component="form"
                sx={{ py: .5, px: 1, display: "flex", alignments: "center" }}
              >
                <CategorySelectorComponent />
                <InputBase sx={{ mx: 1 }} fullWidth></InputBase>
                <IconButton color="primary">
                  <Search />
                </IconButton>
              </Paper>
            </Container>
            <ShoppingBasketComponent></ShoppingBasketComponent>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default AppBarComponent;