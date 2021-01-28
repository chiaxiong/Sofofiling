import React from "react";
import { Link, Typography } from "@material-ui/core";

export default function ProfileSideBar() {
  return (
    <div>
      <Link href="/feed">
        <Typography>Sofofiling</Typography>
      </Link>
    </div>
  );
}
