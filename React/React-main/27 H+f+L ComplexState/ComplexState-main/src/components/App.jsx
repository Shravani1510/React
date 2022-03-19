import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <input
        onChange={handleChange}
        name="fName"
        placeholder="First Name"
        value={fullName.fName}
      />
      <input
        onChange={handleChange}
        name="lName"
        placeholder="Last Name"
        value={fullName.lName}
      />
      <button>submit</button>
    </div>
  );
}

// function App() {
//   const [fname, setfName] = useState("");
//   const [lname, setlName] = useState("");
//   const [headingTextf, setTextf] = useState();
//   const [headingTextl, setTextl] = useState();

//   function updatefName(event) {
//     setfName(event.target.value);
//   }
//   function updatelName(event) {
//     setlName(event.target.value);
//   }

//   function handleClick(event) {
//     setTextf(fname);
//     setTextl(fname);

//     event.preventDefault();
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello  {fname} {lname}{headingTextf} {headingTextl}
//       </h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={updatefName}
//           name="fName"
//           placeholder="First Name"
//           value={fname}
//         />
//         <input
//           onChange={updatelName}
//           name="lName"
//           placeholder="Last Name"
//           value={lname}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
