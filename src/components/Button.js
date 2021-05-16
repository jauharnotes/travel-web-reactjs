import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLE = ["btn-primary", "btn-outline"];
const SIZE = ["btn-medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const ceckButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const ceckButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`${ceckButtonStyle} ${ceckButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
