"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z
    .string()
    .min(5, "Username/email must be at least 5 characters.")
    .max(20, "Bug title must be at most 20 characters."),
  password: z
    .string()
    .min(6, "Description must be at least 6 characters.")
    .max(32, "Description must be at most 32 characters."),
});

const page = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (e) => {
    console.log("Form submitted", e);
  };

  return (
    <div className="max-w-7xl px-4 mx-auto min-h-[80dvh]">
      <div className="max-w-sm mx-auto mt-10 lg:mt-40">
        <h1 className="text-4xl py-4 lg:py-6 text-center">👧🏻 🧒🏻 🐱</h1>
        <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Email or Username */}
          <FieldGroup className="gap-4">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login">
                    Email or Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-login"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email or Username"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-login-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Password"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit">Submit</Button>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default page;
