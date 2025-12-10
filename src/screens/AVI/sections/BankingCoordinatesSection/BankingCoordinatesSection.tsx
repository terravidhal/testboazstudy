import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const BankingCoordinatesSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-solid border-[#0140ff] flex items-center justify-center">
        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0140ff] text-base text-center tracking-[0] leading-[normal]">
          10
        </span>
      </div>

      <div className="flex-1 flex items-center min-h-10 rounded-[7px] border border-solid border-[#0140ff] px-[7px]">
        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#979797] text-sm tracking-[0] leading-5">
          Dépot de preuve
        </span>
      </div>

      <CollapsibleTrigger asChild>
        <Button
          aria-label="Ouvrir/fermer la section Dépot de preuve"
          variant="ghost"
          size="icon"
          className="flex-shrink-0 w-[41px] h-10 bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-none p-0"
        >
          <ChevronDownIcon className="w-[13.86px] h-3" />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="sm:col-span-3 mt-3 sm:mt-0 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (dépôt de preuve).
      </CollapsibleContent>
    </Collapsible>
  );
};
