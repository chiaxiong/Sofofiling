import React, { useState } from "react";
import ProfilePost from "./ProfilePost";
import AttendPost from "./AttendPost";
import { Button } from "@material-ui/core";

export default function ProfileFeed({ post }) {
  const [state, setState] = useState(null);

  switch (state) {
    // case 0:
    //   return (
    //     <div onClick={() => setState(0)}>
    //       <Button>Return</Button>
    //     </div>
    //   );
    case 1:
      return (
        <div>
          <ProfilePost post={post} />
          <Button onClick={() => setState(2)}>Attend Post</Button>
        </div>
      );
    case 2:
      return (
        <div>
          <AttendPost />
          <Button onClick={() => setState(1)}>My Post</Button>
        </div>
      );
  }

  return (
    <div>
      <Button onClick={() => setState(2)}>Attend Post</Button>
      <Button onClick={() => setState(1)}>My Post</Button>
    </div>
  );
}
