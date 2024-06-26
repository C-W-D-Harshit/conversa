import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { PlusIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow w-full bg-card">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <div className="flex flex-col items-center w-full text-center p-6 bg-muted rounded-md space-y-4">
            <SparklesIcon />
            <div>
              <h2 className="font-semibold text-xl">How can I help you?</h2>
              <p className="font-medium text-muted-foreground text-sm">
                You can ask me anything, just get started.
              </p>
            </div>
            <Link href="/new-chat">
              <Button className="w-full rounded-full gap-3">
                <PlusIcon />
                <p>New chat</p>
              </Button>
            </Link>
          </div>
          <div>
            <div className="flex justify-between items-center border-b py-3">
              <h2 className="font-medium text-xl">Recent chats</h2>
              <Link href="/chats">View all</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
