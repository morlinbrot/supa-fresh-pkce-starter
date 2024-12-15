import { FormButton } from "$components/FormButton.tsx";
import { Input } from "$components/Input.tsx";
import { Link } from "$components/Link.tsx";

export enum AuthFormMode {
  In = "in",
  Up = "up",
}

type Props = {
  mode: AuthFormMode;
};

// Needs to be an island for the disabled state of fields and buttons to work.
export function AuthForm({ mode }: Props) {
  const signIn = {
    title: "Log In",
    href: "/login",
    text: "Have an account?",
  };

  const signUp = {
    title: "Create account.",
    href: "/signup",
    text: "No account?",
  };

  const buttProps = mode == AuthFormMode.In ? signIn : signUp;
  const footProps = mode == AuthFormMode.In ? signUp : signIn;

  return (
    <form action={`/api${buttProps.href}`} method="post" class="space-y-4">
      <Input autofocus type="email" name="email" autoComplete="email" />
      <Input type="password" name="password" autoComplete="password" />

      <FormButton type="submit" class="!mt-8">
        {buttProps.title}
      </FormButton>

      <div class="flex justify-between">
        <span>
          {footProps.text} <Link href={`/auth${footProps.href}`}>{footProps.title}</Link>
        </span>
        {mode === AuthFormMode.In && (
          <span>
            Forgot password? <Link href="/auth/recover">Recover.</Link>
          </span>
        )}
      </div>
    </form>
  );
}
