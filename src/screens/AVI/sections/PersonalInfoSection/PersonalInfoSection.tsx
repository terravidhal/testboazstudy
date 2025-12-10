import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const PersonalInfoSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <div className="flex-shrink-0 w-10 h-10 rounded-[20px] border border-solid border-[#0140ff] flex items-center justify-center">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
            03
          </span>
        </div>

        <div className="flex-1 min-h-10 rounded-[7px] border border-solid border-[#0140ff] flex items-center justify-center px-4">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#999999] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Informations Financièreset Autres
          </span>
        </div>

        <CollapsibleTrigger asChild>
          <button
            aria-label="Ouvrir/fermer la section Informations Financières"
            className="flex-shrink-0 w-[41px] h-10 bg-[#d9d9d9] flex items-center justify-center"
          >
            <ChevronDownIcon className="w-[13.86px] h-3 text-black" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (formulaire ou informations financières).
      </CollapsibleContent>
    </Collapsible>
  );
};
