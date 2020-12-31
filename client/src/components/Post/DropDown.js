import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";

export default function DropDown({ title, categoryList }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleItemSelect = category => {
    // setSelection(category);
    console.log(category.current);
  };

  return (
    <div>
      <div
        role="button"
        onOpen={() => toggle(!open)}
        onClick={() => toggle(!open)}>
        <div>{title}</div>
        <P>{open ? "Close" : "Open"}</P>
      </div>
      {open && (
        <ul>
          {categoryList.map(category => (
            <li key={category.id}>
              <button
                onClick={() => handleItemSelect(categoryList)}
                type="button">
                <span>{category.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const P = styled.p`
  border: 1px solid black;
`;
