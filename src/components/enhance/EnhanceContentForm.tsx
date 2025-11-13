"use client";

import { useActionState, useFormStatus } from "react-dom";
import { handleEnhanceContent } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Bot, Loader2 } from "lucide-react";

const initialState = {
  message: "",
  errors: undefined,
  enhancedContent: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enhancing...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-4 w-4" />
          Enhance Content
        </>
      )}
    </Button>
  );
}

export function EnhanceContentForm() {
  const [state, formAction] = useActionState(handleEnhanceContent, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Success") {
      toast({
        title: "Content Enhanced!",
        description: "Your content has been successfully refined.",
      });
    } else if (
      state.message &&
      state.message !== "Validation failed" &&
      !state.errors
    ) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Original Content</CardTitle>
          <CardDescription>Enter the text you want to enhance.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <Textarea
              name="content"
              placeholder="Paste your original content here..."
              className="min-h-[300px] text-base"
              required
            />
            {state?.errors?.content && (
              <p className="text-sm font-medium text-destructive">
                {state.errors.content[0]}
              </p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Enhanced Content</CardTitle>
          <CardDescription>
            AI-powered refinement tailored for KSA Vision 2030.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="min-h-[300px] rounded-md border bg-background p-4 text-base">
            {state.enhancedContent ? (
              <p>{state.enhancedContent}</p>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Bot className="h-12 w-12 mb-4" />
                <p>Your enhanced content will appear here.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
