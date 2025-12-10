import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const BankingEstablishmentSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <Badge
          variant="outline"
          className="flex items-center justify-center w-10 h-10 rounded-full border-[#0140ff] text-[#0140ff] [font-family:'Roboto',Helvetica] font-medium text-base"
        >
          09
        </Badge>

        <div className="flex items-center flex-1 min-h-10 rounded-[7px] border border-solid border-[#0140ff] px-5">
          <span className="[font-family:'Roboto',Helvetica] font-medium text-[#979797] text-sm">
            Mon contrat
          </span>
        </div>

        <CollapsibleTrigger asChild>
          <Button
            aria-label="Ouvrir/fermer la section Mon contrat"
            variant="ghost"
            size="icon"
            className="w-[41px] h-10 bg-[#d9d9d9] hover:bg-[#d9d9d9] rounded-none p-0"
          >
            <ChevronDownIcon className="w-[13.86px] h-3 text-black" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="mt-3 rounded-[10px] border border-dashed border-[#d7d7d7] bg-white p-4 text-sm text-slate-600">
        Contenu à compléter (contrat).
      </CollapsibleContent>
    </Collapsible>
  );
};
