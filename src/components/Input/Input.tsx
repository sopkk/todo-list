import * as React from "react";

interface Props {
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  checked?: boolean;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<Props> = ({
  name,
  type,
  value,
  placeholder,
  checked,
  className,
  onChange
}) => {
  switch (type) {
    case "text":
      return (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
        />
      );
    case "checkbox":
      return (
        <input
          name={name}
          type={type}
          checked={checked}
          className={className}
          onChange={onChange}
        />
      );
    default:
      return (
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      );
  }
};

export default Input;
