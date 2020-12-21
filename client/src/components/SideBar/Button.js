import React from "react";
import Button from "@material-ui/core/Button";

function CategoryList(props) {
  return (
    <div>
      <Button>{props.category}</Button>
    </div>
  );
}

export default CategoryList;
