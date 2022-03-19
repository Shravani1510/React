import React from "react";

function Todoitem(props) {
  //const [line, setLine] = useState(false);

  // function handleChange() {
  //   // setLine((prevValue) => {
  //   //   return !prevValue;
  //   // });
  // }

  return (
    //style={{ textDecorationLine: line ? "Line-through" : "none" }}
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default Todoitem;
