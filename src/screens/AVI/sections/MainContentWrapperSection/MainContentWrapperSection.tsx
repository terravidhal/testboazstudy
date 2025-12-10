import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { Separator } from "../../../../components/ui/separator";

const menuItems = [
  {
    id: "acceuil",
    label: "Acceuil",
    icon: "home",
    active: true,
    highlighted: true,
  },
  {
    id: "mon-agence",
    label: "Mon agence",
    icon: "building",
    hasDropdown: false,
  },
  {
    id: "services",
    label: "Services",
    icon: "grid",
  },
  {
    id: "mes-suscriptions",
    label: "Mes suscriptions",
    icon: "folder",
    active: true,
    expanded: true,
    subItems: [
      { id: "services-sub", label: "Services" },
      { id: "financement", label: "Financement" },
      { id: "remboursements", label: "Remboursements" },
    ],
  },
  {
    id: "preuves",
    label: "Preuves de versement",
    icon: "clipboard",
    indented: true,
  },
  {
    id: "wallet",
    label: "Mon Wallet Boaz",
    icon: "euro",
    hasDropdown: true,
    expanded: true,
    subItems: [{ id: "historiques", label: "Mes historiques" }],
  },
  {
    id: "affiliation",
    label: "Programme d'affiliation",
    icon: "users",
  },
];

const generalItems = [
  {
    id: "tableau",
    label: "Tableau de bord",
    icon: "layout",
  },
  {
    id: "parametres",
    label: "Paramètres",
    icon: "settings",
  },
];

const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    home: <div className="w-5 h-5 bg-[url(/home.svg)] bg-cover" />,
    building: <div className="w-5 h-5 bg-[url(/office-building.svg)] bg-cover" />,
    grid: <div className="w-5 h-5 bg-[url(/view-grid-add.svg)] bg-cover" />,
    folder: <div className="w-5 h-5 bg-[url(/collection.svg)] bg-cover" />,
    clipboard: <div className="w-5 h-5 bg-[url(/clipboard-check.svg)] bg-cover" />,
    euro: <div className="w-5 h-5 bg-[url(/currency-euro.svg)] bg-cover" />,
    users: <div className="w-5 h-5 bg-[url(/user-group.svg)] bg-cover" />,
    layout: <div className="w-5 h-5 bg-[url(/template.svg)] bg-cover" />,
    settings: <div className="w-5 h-5 bg-[url(/cog.svg)] bg-cover" />,
  };
  return iconMap[iconName] || null;
};

export const MainContentWrapperSection = (): React.ReactNode => {
  const [openMenu, setOpenMenu] = useState<string | null>("mes-suscriptions");

  return (
    <aside className="relative w-full md:w-[240px] h-auto md:sticky md:top-6">
      <nav className="w-full h-full max-h-[80vh] md:max-h-[calc(100vh-96px)] overflow-y-auto bg-[#ffffff] rounded-[25px] border border-solid border-[#d7d7d7] shadow-[0px_26px_58px_#00000005,0px_105px_105px_#00000005,0px_236px_141px_#00000003,0px_419px_168px_transparent,0px_655px_183px_transparent] flex flex-col">
        <div className="pt-6 px-[40px] pb-[40px] md:px-[60px] md:pb-[52px]">
          <img
            className="w-[108px] h-11"
            alt="Boaz studyy"
            src="/boaz--studyy-1.png"
          />
        </div>

        <div className="flex-1 flex flex-col px-[13px] pb-6">
         

          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.highlighted ? (
                /* --- Highlighted item --- */
                <div className="bg-[#f5f6fa] rounded-[10px] px-[9px] py-[6.5px] mb-[18px]">
                  <div className="flex items-center gap-[10px]">
                    {getIcon(item.icon)}
                    <span className="text-[#0140ff] text-base font-bold">
                      {item.label}
                    </span>
                  </div>
                </div>
              ) : item.subItems ? (
                /* --- Item with subItems (Collapsible) --- */
                <Collapsible
                  open={openMenu === item.id}
                  onOpenChange={(open) => setOpenMenu(open ? item.id : null)}
                  className="mb-[18px]"
                >
                  <div className="flex flex-col">
                    <CollapsibleTrigger
                      aria-label={`Basculer ${item.label}`}
                      className="flex items-center gap-[10px] px-[9px] py-[6.5px]"
                    >
                      {getIcon(item.icon)}
                      <span
                        className={`text-base font-bold ${
                          item.active ? "text-[#0140ff]" : "text-[#646464]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.hasDropdown && (
                        <div className="ml-auto w-5 h-5 bg-[url(/chevron-down-1.svg)] bg-cover" />
                      )}
                    </CollapsibleTrigger>
          
                    <Separator className="my-[18px] mx-[13px]" />
          
                    <CollapsibleContent>
                      <div className="bg-[#cfd6dc75] shadow-[inset_0px_0px_10.7px_-2px_#00000040] py-[27px] -mx-[13px] px-[13px]">
                        {item.subItems.map((subItem, subIndex) => (
                          <React.Fragment key={subItem.id}>
                            <div className="flex items-center justify-between px-[9px] py-[6.5px]">
                              <span className="text-[#646464] text-base font-bold">
                                {subItem.label}
                              </span>
                              <div className="w-5 h-5">
                                <img
                                  className="w-full h-full rotate-180"
                                  alt="Chevron down"
                                  src="/chevron-down.svg"
                                />
                              </div>
                            </div>
                            {subIndex < item.subItems.length - 1 && (
                              <Separator className="my-[18px] mx-[13px]" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </CollapsibleContent>
          
                    <Separator className="my-[18px] mx-[13px]" />
                  </div>
                </Collapsible>
              ) : item.indented ? (
                /* --- Indented item --- */
                <div className="flex items-center px-[38px] py-[6.5px] mb-[18px]">
                  <span className="text-[#646464] text-base font-bold">
                    {item.label}
                  </span>
                </div>
              ) : (
                /* --- Default simple item --- */
                <div className="flex items-center gap-[10px] px-[9px] py-[6.5px] mb-[18px]">
                  {getIcon(item.icon)}
                  <span className="text-[#646464] text-base font-bold">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <div className="ml-auto w-5 h-5 bg-[url(/chevron-down-1.svg)] bg-cover" />
                  )}
                </div>
              )}
          
              {index < menuItems.length - 1 &&
                !item.subItems &&
                !item.indented && (
                  <Separator className="my-[18px] mx-[13px]" />
                )}
            </React.Fragment>
          ))}
          

          <div className="flex items-center justify-center gap-[97px] my-[18px]">
            <img className="w-[46px] h-0.5" alt="Line" src="/line-21.svg" />
            <span className="text-[#646464] text-base font-bold leading-[normal]">
              GENERAL
            </span>
            <img className="w-[46px] h-0.5" alt="Line" src="/line-21.svg" />
          </div>

          {generalItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex items-center gap-[10px] px-[9px] py-[6.5px]">
                {getIcon(item.icon)}
                <span className="text-[#646464] text-base font-bold leading-[normal]">
                  {item.label}
                </span>
              </div>
              {index < generalItems.length - 1 && <div className="h-[18px]" />}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </aside>
  );
};
