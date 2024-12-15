import { FormButton } from "$components/FormButton.tsx";
import { Input } from "$components/Input.tsx";

export enum RecoverFormMode {
  Set = "set",
  Reset = "reset",
}

type Props = {
  mode: RecoverFormMode;
};

// Needs to be an island for the disabled state of fields and buttons to work.
export function RecoverForm({ mode }: Props) {
  const reset = mode === RecoverFormMode.Reset;

  const [action, buttonText] = reset
    ? ["/api/recover", "Reset Password"]
    : ["/api/update-password", "Set New Password"];

  return (
    <form action={action} method="post" class="space-y-4">
      {reset ? (
        <Input autofocus type="email" name="email" autoComplete="email" />
      ) : (
        <Input autofocus type="password" name="password" autoComplete="password" />
      )}

      <FormButton type="submit" class="!mt-8">
        {buttonText}
      </FormButton>
    </form>
  );
}
