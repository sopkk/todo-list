import * as React from "react";

interface Props {
  name: string;
  type: "button" | "submit" | "reset";
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FunctionComponent<Props> = ({
  name,
  type,
  className,
  onClick,
  children
}) => (
  <button name={name} type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
