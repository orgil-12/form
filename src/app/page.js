"use client";
import Image from "next/image";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { StepFour } from "@/components/StepFour";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });
  console.log(form.image);

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    setForm(newValues);
  };

  return (
    <div className={`${inter.className}] `}>
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        form={form}
        onChange={onChange}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}

const FormBody = ({
  currentStep,
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  } else if (currentStep === 2) {
    return (
      <StepTwo
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  } else if (currentStep === 3) {
    return (
      <StepThree
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        errors={errors}
        setErrors={setErrors}
      />
    );
  } else {
    return <StepFour />;
  }
};
