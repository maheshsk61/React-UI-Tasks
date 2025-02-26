import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  document.body.style.backgroundColor = isOn ? "black" : "white";

  return (
    <div>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
        style={{
          position: "relative",
          width: "100px",
          height: "50px",
          borderRadius: "30px",
          transition: "0.3s",
          display: "flex",
          alignItems: "center",
          background: isOn ? "green" : "white",
          border: isOn ? "2px solid white" : "2px solid black",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            background: "silver",
            transition: "0.3s",
            left: !isOn ? "5px" : "50px",
          }}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
