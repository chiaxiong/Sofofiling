import React from "react";
import MenuNav from "../MenuItem/MenuNav";
import SideBar from "../SideBar/SideBar";
import { Grid } from "@material-ui/core";

export default function NavLayout({ children }) {
  return (
    <div>
      <Grid container>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <MenuNav />
        </Grid>
        <Grid item> {children}</Grid>
      </Grid>
    </div>
  );
}
