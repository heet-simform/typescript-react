import { type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

function Input(props: InputProps) {
  const { id, label, ...otherProps } = props;
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
    </div>
  );
}

export default Input;
