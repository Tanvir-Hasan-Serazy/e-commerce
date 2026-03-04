"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronDownIcon } from "lucide-react";
import { format } from "date-fns";

const formSchema = z
  .object({
    firstName: z.string().min(2, "First name should be at least 2 characters"),
    lastName: z.string().min(2, "Last name should be at least 2 characters"),
    email: z.email({ message: "Invalid email format" }),
    username: z
      .string()
      .min(5, "Username/email must be at least 5 characters.")
      .max(20, "Bug title must be at most 20 characters."),
    dateOfBirth: z.preprocess(
      (val) => {
        if (typeof val === "string" || val instanceof Date) {
          return new Date(val);
        }
        return val;
      },
      z
        .date()
        .max(new Date(), { message: "Date of birth cannot be in future" }),
    ),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters.")
      .max(32, "Password must be at most 32 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = (e) => {
    console.log("Form submitted", e);
  };

  const onError = (error) => {
    console.log("Form submission error", error);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-7xl px-4 mx-auto min-h-[80dvh]">
      <div className="max-w-sm mx-auto lg:mt-10 ">
        <h1 className="text-4xl py-4 lg:py-6 text-center">👧🏻 🧒🏻 🐱</h1>
        <form id="form-login" onSubmit={form.handleSubmit(onSubmit, onError)}>
          {/* First Name */}
          <FieldGroup className="gap-4">
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login">First Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-login"
                    aria-invalid={fieldState.invalid}
                    placeholder="First name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Last Name  */}
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login">Last Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-login"
                    aria-invalid={fieldState.invalid}
                    placeholder="Last name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-login"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Username */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-login">Username</FieldLabel>
                  <Input
                    {...field}
                    id="form-login"
                    aria-invalid={fieldState.invalid}
                    placeholder="Username"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Date of Birth */}
            <Controller
              name="dateOfBirth"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Date of Birth</FieldLabel>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Date of Birth</span>
                        )}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(data) => {
                          field.onChange(data);
                          setIsOpen(false);
                        }}
                        className="rounded-lg border"
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
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

            {/* Confirm Password */}
            <Controller
              name="confirmPassword"
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
                    placeholder="Confirm password"
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
