"use client";
import Image from "next/image";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";

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

  const onChange = (e) => {
    const field = e.target.id;
    const newValues = { ...form, [field]: e.target.value };
    console.log(newValues);
    setForm(newValues);
  };
    const numbers = "1234567890"
  const checkForm = () => {
    for (let i = 0; i < form?.firstname.length; i++) {
      let char = form.firstname[i]
      if (!numbers.includes(char)) {
        for (let i = 0; i < form?.lastname.length; i++) {
          let char = form.lastname[i]
          if (!numbers.includes(char)) {
            for (let i = 0; i < form?.username.length; i++) {
              let char = form.username[i]
              if (!numbers.includes(char)) {
                return true;
              }
            }
          }
        }
      }else return false
    }
  };

  return (
    <div className="">
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        form={form}
        onChange={onChange}
        checkForm={checkForm}
      />
    </div>
  );
}

const FormBody = ({
  currentStep,
  setCurrentStep,
  onChange,
  form,
  checkForm,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        checkForm={checkForm}
      />
    );
  } else if (currentStep === 2) {
    return (
      <StepTwo
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
      />
    );
  } else if (currentStep === 3) {
    return (
      <StepThree
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
      />
    );
  }
};
