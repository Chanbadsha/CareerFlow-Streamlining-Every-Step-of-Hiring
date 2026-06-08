"use client";

import {
  Button,
  Input,
  Label,
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { MoveRight, User } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const [isSelected, setIsSelected] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userRole: "job-seeker",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 ">
        {/* EMAIL */}
        <TextField>
          <Label>Email</Label>
          <Input
            className={`placeholder:text-foreground bg-background border border-border`}
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-xs mt-0.5 text-red-500">
              {errors?.email?.message}
            </span>
          )}
        </TextField>

        {/* PASSWORD */}
        <TextField>
          <Label>Password</Label>
          <Input
            className={`placeholder:text-foreground bg-background border border-border`}
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
          />
          {errors.password && (
            <span className="text-xs mt-0.5 text-red-500">
              {errors?.password?.message}
            </span>
          )}
        </TextField>

        {/* TERMS */}

        <TextField>
          <Checkbox
            {...register("terms", {
              required: "You must accept the terms",
            })}
            isSelected={isSelected}
            onChange={setIsSelected}
          >
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <span className="text-xs text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <span className="underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>
                .
              </span>
            </Checkbox.Content>
          </Checkbox>
          {errors.terms && (
            <span className="text-xs mt-0.5 text-red-500">
              {errors?.terms?.message}
            </span>
          )}
        </TextField>

        {/* SUBMIT */}
        <Button type="submit" className="w-full">
          Sign In
          <MoveRight className="ml-2" />
        </Button>
      </form>

      <div className="flex items-center gap-4 my-6">
        <div className="h-px flex-1 bg-border" />

        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Or
        </p>

        <div className="h-px flex-1 bg-border" />
      </div>
      {/* Google Login */}
      <Button className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginForm;
