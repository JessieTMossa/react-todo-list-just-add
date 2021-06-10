//  import react for use in this file
import React from "react";

// create functional component for header section, using parameter to catch props: "OG" props retrieval method instead of destructuring
const Header = (props) => {
//   return rendered html of header
  return (
//     could get rid of div and just keep h1, or change div to header (more semantically appropriate)
    <div>
//     header text with object containing style rules as defined below, and title prop defined on line 37 of App.js, and retrieved with (props) parameter on line 5 this file
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// create variable with object to hold styling for header
const headerStyle = {
//   declaration names are in camelCase as this is JSX
  fontSize: "40px",
  textDecoration: "underline",
};

// export Header component
export default Header;
