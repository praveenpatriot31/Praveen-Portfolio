import React from "react";
import clsx from "clsx";

export default function Container({
  as: Component = "div",
  children,
  className,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-20", // Aligned directly with your portfolio's premium spacing grid
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}