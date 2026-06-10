"use client";

import { authClient, signUp } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  Spinner,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { MoveRight, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
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

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setAuthError(null);
      setUser(null);

      const { data: user, error } = await signUp.email(data);

      if (error) {
        setAuthError(error || "Failed to create account.");
        return;
      }

      if (user) {
        setUser(user);

        router.push("/");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  const googleLogin = async () => {
    setGoogleLoading(true);
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      setGoogleLoading(false);
    }
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
              validate: (value) =>
                value === password || "Password do not match",
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

        <div>
          {/* Feedback Message */}
          {authError && (
            <div className="rounded-lg border border-danger/20 bg-danger/10 px-3 py-2 text-sm text-danger">
              {authError?.message ||
                "Failed to create account. Please try again."}
            </div>
          )}

          {user && (
            <div className="rounded-lg border border-success/20 bg-success/10 px-3 py-2 text-sm text-success">
              {"Successfully signed in.Please login to continue"}
            </div>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full font-medium"
          isPending={loading}
        >
          {({ isPending }) => (
            <>
              {isPending ? (
                <>
                  <Spinner color="current" size="sm" />
                  <span className="ml-2">Creating account...</span>
                </>
              ) : (
                <>
                  Create Account
                  <MoveRight className="ml-2 h-4 w-4" />
                </>
              )}
            </>
          )}
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
      <Button onClick={googleLogin} className="w-full" variant="tertiary">
        {googleLoading ? (
          <>
            {" "}
            <Spinner color="current" size="sm" />
            <span className="ml-2">Signing in...</span>
          </>
        ) : (
          <>
            {" "}
            <Icon icon="devicon:google" />
            Sign in with Google
          </>
        )}
      </Button>
    </div>
  );
};

export default RegisterForm;
