import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Search Engine Optimizer (S.E.O)",
          "Deep Learning Engineer | N.L.P ",    
          "SysAdmin | DevSecOps Engineer",
          "Open Source Contributor (F.O.S.S)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
