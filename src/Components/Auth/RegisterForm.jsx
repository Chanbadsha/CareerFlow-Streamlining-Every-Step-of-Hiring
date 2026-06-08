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

const RegisterForm = () => {
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
        {/* ROLE SELECT */}
        <div className="flex flex-col gap-3">
          <Label className="text-sm font-medium">Select account type</Label>

          <Controller
            name="userRole"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onChange={field.onChange}
                className="flex  flex-row gap-4"
              >
                {/* RECRUITER */}
                <Radio value="recruiter">
                  <div
                    className={`
                          flex flex-col gap-2 p-5 rounded-xl border cursor-pointer
                          transition-all duration-300 ease-out
                          hover:shadow-md hover:-translate-y-0.5
                          ${
                            field.value === "recruiter"
                              ? "bg-muted border-foreground/30 shadow-sm ring-1 ring-foreground/10"
                              : "bg-transparent"
                          }
                        `}
                  >
                    <User className="w-5 h-5" />
                    <h5 className="text-base font-semibold">Recruiter</h5>
                    <p className="text-sm text-muted-foreground">
                      I want to hire talent
                    </p>
                  </div>
                </Radio>

                {/* JOB SEEKER */}
                <Radio value="job-seeker">
                  <div
                    className={`
                          flex flex-col gap-2 p-5 rounded-xl border cursor-pointer
                          transition-all duration-300 ease-out
                          hover:shadow-md hover:-translate-y-0.5
                          ${
                            field.value === "job-seeker"
                              ? "bg-muted border-foreground/30 shadow-sm ring-1 ring-foreground/10"
                              : "bg-transparent"
                          }
                        `}
                  >
                    <User className="w-5 h-5" />
                    <h5 className="text-base font-semibold">Job Seeker</h5>
                    <p className="text-sm text-muted-foreground">
                      I want to find a role
                    </p>
                  </div>
                </Radio>
              </RadioGroup>
            )}
          />
        </div>

        {/* NAME */}
        <TextField>
          <Label>Name</Label>
          <Input
            className={`placeholder:text-foreground bg-background border border-border`}
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className="text-xs mt-0.5 text-red-500">
              {errors?.name?.message}
            </span>
          )}
        </TextField>

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

        {/* CONFIRM PASSWORD */}
        <TextField>
          <Label>Confirm Password</Label>
          <Input
            className={`placeholder:text-foreground bg-background border border-border`}
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <span className="text-xs mt-0.5 text-red-500">
              {errors?.confirmPassword?.message}
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
          Create Account
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

export default RegisterForm;
