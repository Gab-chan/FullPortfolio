import React from "react";

function Jumbotron({ children }) {
  return (
    <div
        style={{ height: "auto", width: "auto", clear: "both", marginLeft: 100, marginRight: 100 }}
        className="jumbotron1"
      >
        {children}
      </div>

    
    
  );
};

export default Jumbotron;
