import { JSX } from "preact";

import { Button } from "$components/Button.tsx";

export function FormButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <Button {...props} disabled={props.disabled} class={`btn btn-accent ${props.class ?? ""}`} />;
}
