"use client";

import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { useChat } from "ai/react";
import { SparklesIcon } from "lucide-react";
import { useEffect, useRef } from "react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);
  console.log(messages);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <div className="flex flex-col h-[calc(100dvh-5rem)] space-y-6 py-6">
      <div className="flex-grow flex flex-col">
        <MaxWidthWrapper className="flex-grow flex flex-col">
          {messages.length === 0 ? (
            <div className="flex-grow w-full flex flex-col justify-center items-center px-12">
              <div className="flex flex-col items-center w-full text-center p-6 bg-muted rounded-md space-y-4">
                <SparklesIcon />
                <div>
                  <h2 className="font-semibold text-xl">Quick tip!</h2>
                  <p className="font-medium text-muted-foreground text-sm">
                    Write a message to get started.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <ul
              ref={chatParent}
              className="h-1 p-4 flex-grow bg-card rounded-lg overflow-y-auto flex flex-col gap-4"
            >
              {messages.map((m, index) => (
                <>
                  {m.role === "user" ? (
                    <li key={index} className="flex flex-row">
                      <div className="rounded-xl p-4 bg-muted shadow-md flex text-white">
                        <p className="text-white">{m.content}</p>
                      </div>
                    </li>
                  ) : (
                    <li key={index} className="flex flex-row-reverse">
                      <div className="rounded-xl p-4 bg-primary/70 shadow-md flex w-3/4 text-white">
                        <p className="text-white">
                          <span className="font-bold">Answer: </span>
                          {m.content}
                        </p>
                      </div>
                    </li>
                  )}
                </>
              ))}
            </ul>
          )}
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={handleInputChange}
            className="h-12 rounded-full w-full bg-card shadow-sm px-4"
          />
          <input type="submit" hidden />
        </form>
      </MaxWidthWrapper>
    </div>
  );
}
