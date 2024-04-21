import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-grow w-full flex justify-center items-center">
      <SignIn path="/sign-in" />
    </div>
  );
}
