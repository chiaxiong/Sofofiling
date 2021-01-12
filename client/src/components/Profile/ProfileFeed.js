import React, { useState } from "react";
import ProfilePost from "./ProfilePost";
import AttendPost from "./AttendPost";
import { Button, Grid } from "@material-ui/core";

export default function ProfileFeed() {
  const [state, setState] = useState(null);

  switch (state) {
    case 0:
      return <ProfilePost />;
    case 1:
      return <AttendPost />;
  }

  return (
    <div>
      <Button onClick={() => setState(0)}>My Post</Button>
      <Button onClick={() => setState(1)}>Attend Post</Button>
    </div>
  );
}
