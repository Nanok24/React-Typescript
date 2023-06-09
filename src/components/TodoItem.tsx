import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onClickRemove: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onClickRemove}>
      {props.text}
    </li>
  );
};

export default TodoItem;
