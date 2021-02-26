import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appBarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#FFF",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#FFF",
    fontSize: "4.5rem",
  },
  goDownIcon: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
});

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.appBarTitle}>
            My<span className={classes.colorText}>Island</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        collapsedHeight={50}
        {...(true ? { timeout: 1000 } : {})}
      >
        <div className={classes.container}>
          <h2 className={classes.title}>
            Welcome to
            <br />
            My <span className={classes.colorText}>Island</span>
          </h2>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDownIcon} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
