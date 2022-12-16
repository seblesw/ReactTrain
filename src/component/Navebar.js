import { Menu, AccountCircle } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
const Navebar = (props) => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          bgcolor: "purple",
          margin: 1,
          borderRadius: "10",
          border: "solid",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 10 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Rohoboth
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navebar;
