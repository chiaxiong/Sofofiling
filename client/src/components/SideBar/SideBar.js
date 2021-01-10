import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useUser from "../../userContext/useUser";
import { navigate } from "@reach/router";
import Link from "@material-ui/core/Link";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttonList: {
    display: "flex",
    flexDirection: "column",
  },
  trendingButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
  },
  myButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
    position: "relative",
    left: "40px",
  },
  sidebar: {
    backgroundColor: "#F5AB7C",
    height: "100%",
  },
  divider: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "-20px",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { token, user } = useUser();

  if (!user) navigate("/signin");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getCategory = categoryId => {
    props.categoryHandler(categoryId);
  };

  const drawer = (
    <div className={classes.sidebar}>
      <div className={classes.toolbar} />
      <Link href="/feed">
        <Typography>Sofofiling</Typography>
      </Link>
      <Divider className={classes.divider} />
      <Typography>Trending Categories</Typography>
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button
            key={index}
            className={classes.trendingButton}
            onClick={() => getCategory(text)}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button key={index} className={classes.myButton}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {/* Hambergur Button */}
      <Grid>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </Grid>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
