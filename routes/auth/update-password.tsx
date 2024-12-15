import { RecoverForm, RecoverFormMode } from "$islands/RecoverForm.tsx";

export default function UpdatePasswordPage() {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col items-stretch w-[500px] md:w-2/3">
        <RecoverForm mode={RecoverFormMode.Set} />
      </div>
    </div>
  );
}
