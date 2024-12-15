import { JSX } from "preact";

export function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  const name = props.name?.toString() || "";
  const displayName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  return (
    <label for={props.name} class="form-control">
      <div class="label">
        <span class="label-text">{displayName}</span>
      </div>
      <input
        {...props}
        disabled={props.disabled}
        class={`input input-accent ${props.class ?? ""}`}
      />
    </label>
  );
}
