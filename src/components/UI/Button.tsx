import { type ComponentPropsWithoutRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

type TextOnlyProps = {
  textOnly?: boolean;
  className?: string;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  TextOnlyProps & {
    to?: never;
  };

type LinkProps = ComponentPropsWithoutRef<"a"> &
  TextOnlyProps & {
    to: string;
  };

function isRouterLink(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

function Button(props: ButtonProps | LinkProps) {
  if (isRouterLink(props)) {
    const { className = "", textOnly, children, ...otherProps } = props;
    return (
      <Link
        className={classNames("button", {
          "button--text-only": textOnly,
          className,
        })}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  const { className = "", children, ...otherProps } = props;
  return (
    <button
      className={classNames("button", {
        "button--text-only": props.textOnly,
        className,
      })}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

export default Button;
