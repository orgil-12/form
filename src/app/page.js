"use client"
import Image from "next/image";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const FormBody = ({currentStep , setCurrentStep}) => {
    console.log(currentStep)
    if (currentStep === 1) {
      return <StepOne setCurrentStep={setCurrentStep}/>;
    } else if (currentStep === 2) {
      return <StepTwo setCurrentStep={setCurrentStep}/>;
    } else if (currentStep === 3) {
      return <StepThree setCurrentStep={setCurrentStep}/>;
    }
  };

  return (
    <div className="">
      <FormBody  currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
