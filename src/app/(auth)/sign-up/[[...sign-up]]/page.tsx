import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-grow flex w-full justify-center items-center">
      <SignUp path="/sign-up" />
    </div>
  );
}
