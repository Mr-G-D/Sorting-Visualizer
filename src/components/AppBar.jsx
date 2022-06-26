import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Appbar = (props) => {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = React.useState("Algorithm");

  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => {
    setSidebar(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={showSidebar}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {algorithm} Sort
          </Typography>
          <Button onClick={() => props.function(props.array)} color="inherit">
            Sort
          </Button>
        </Toolbar>
      </AppBar>
      <Sidebar
        data={sidebar}
        selectAlgorithm={(algorithm) => setAlgorithm(algorithm)}
        hideSidebar={() => setSidebar(false)}
      />
    </div>
  );
};

export default Appbar;
