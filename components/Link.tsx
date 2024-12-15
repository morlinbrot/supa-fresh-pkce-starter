import { JSX } from "preact";

export function Link(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      disabled={props.disabled}
      class={`link ${props.class ?? ""}`}
    />
  );
}
