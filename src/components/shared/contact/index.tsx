"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm as useFormspreeForm, ValidationError } from "@formspree/react";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "No way your name contains less than 2 characters 👀",
    })
    .max(50),
  message: z.string().min(10, {
    message: "Please type at least a few words...",
  }),
});

const Contact = () => {
  const [state, formspreeHandleSubmit] = useFormspreeForm("xdoqgpvg");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  if (state.succeeded) {
    return (
      <p className="w-full h-auto text-xl">{`You're email as been sent! Thank You! ✅`}</p>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formspreeHandleSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender&apos;s Name</FormLabel>
              <FormDescription>
                It&apos;s good to know each other, please use your or your
                organization&apos;s name.{" "}
              </FormDescription>
              <FormControl>
                <Input id="name" placeholder="ex: John Doe" {...field} />
              </FormControl>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Leave a message</FormLabel>
              <FormDescription>
                Anything you wanna say. It&apos;s good to keep it short and to
                the point.
              </FormDescription>
              <FormControl>
                <Textarea
                  id="message"
                  maxLength={250}
                  className="max-h-[120px]"
                  placeholder={`ex: Hey, there. Would love to connect with you!`}
                  {...field}
                />
              </FormControl>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={state.submitting} type="submit" className="w-full">
          {state.submitting == true ? "Sending Mail..." : "Send"}
          {state.submitting == true ? (
            <Loader2 size={14} className="animate-spin ml-2" />
          ) : null}
        </Button>
      </form>
    </Form>
  );
};

export default Contact;
