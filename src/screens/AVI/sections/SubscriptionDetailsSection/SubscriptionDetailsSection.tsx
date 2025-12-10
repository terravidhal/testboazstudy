import { Building2Icon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const SubscriptionDetailsSection = (): JSX.Element => {
  return (
    <header className="w-full">
      <div className="bg-white rounded-[25px] border border-[#d7d7d7] shadow-[0px_18px_39px_#00000005,0px_72px_72px_#00000005,0px_161px_97px_#00000003,0px_286px_115px_transparent,0px_448px_125px_transparent] px-9 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-[#0140ff] text-[32px] [font-family:'Nunito_Sans',Helvetica] font-bold tracking-[-0.11px] leading-normal">
            Obtenir mon A.V.I
          </h1>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Building2Icon className="w-6 h-6 text-[#646464]" />
              <span className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#646464] text-sm">
                Mon agence
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Avatar className="w-11 h-11">
                <AvatarImage src="/man-438081-960-720.png" alt="Moni Roy" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-neutral-700 text-sm">
                  Moni Roy
                </span>
                <span className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#565656] text-xs">
                  Admin
                </span>
              </div>

              <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                <MoreVerticalIcon className="w-4 h-4 text-neutral-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
