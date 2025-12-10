import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const steps = [
  {
    number: "01",
    label: "Informations Personnelles",
    isActive: false,
  },
  {
    number: "02",
    label: "Détails de la Formation",
    isActive: true,
  },
];

export const FormWrapperSection = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-0 relative">
      <div className="flex items-center gap-[13px]">
        <div className="w-10 h-10 rounded-[20px] border border-solid border-[#d9d9d9] flex items-center justify-center">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-base text-center tracking-[0] leading-[normal]">
            {steps[0].number}
          </span>
        </div>
        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm tracking-[0] leading-5">
          {steps[0].label}
        </span>
      </div>

      <div className="flex items-center gap-0 mt-6">
        <div className="w-10 h-10 rounded-[20px] border border-solid border-[#0140ff] flex items-center justify-center shrink-0">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
            {steps[1].number}
          </span>
        </div>
        <div className="flex-1 h-10 rounded-[7px] border border-solid border-[#0140ff] ml-[13px]" />
        <Button
          variant="ghost"
          size="icon"
          className="w-[41px] h-10 bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-none p-0 shrink-0"
        >
          <ChevronRightIcon className="w-[13.86px] h-3" />
        </Button>
      </div>

      <div className="flex items-center gap-[13px] mt-2">
        <div className="w-10 shrink-0" />
        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm text-center tracking-[0] leading-5">
          {steps[1].label}
        </span>
      </div>
    </div>
  );
};
