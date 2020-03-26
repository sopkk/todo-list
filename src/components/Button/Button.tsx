import * as React from "react";

interface Props {
  name: string;
  type: "button" | "submit" | "reset";
  className: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FunctionComponent<Props> = ({
  name,
  type,
  className,
  handleClick,
  children
}) => (
  <button name={name} type={type} className={className} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
