import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const PaymentMethodSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full relative">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 h-auto sm:h-10 rounded-[7px] border border-solid border-[#0140ff] px-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-[20px] border border-solid border-[#0140ff] flex items-center justify-center">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
            07
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center [font-family:'Roboto',Helvetica] font-medium text-[#979797] text-sm text-center tracking-[0] leading-5 py-2 sm:py-0">
          Coordonnées bancaires
        </div>

        <CollapsibleTrigger asChild>
          <button
            aria-label="Ouvrir/fermer la section Coordonnées bancaires"
            className="flex-shrink-0 w-[41px] h-10 flex items-center justify-center bg-[#d9d9d9]"
          >
            <ChevronDownIcon className="w-[13.86px] h-3 text-black" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (coordonnées bancaires).
      </CollapsibleContent>
    </Collapsible>
  );
};
