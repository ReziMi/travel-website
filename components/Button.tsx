import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon: string;
  variant: string;
  full?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant,
  full,
}) => {
  return (
    <button className={`button ${variant} ${full ? "full" : ""}`} type={type}>
      <img src={icon} alt={`${title} icon`} />
      {title}
    </button>
  );
};

export default Button;
