import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FileText } from "lucide-react";

type NewCardButtonProps = {
  setCardData: React.Dispatch<React.SetStateAction<{
    name: string;
    title: string;
    email: string;
    link: string;
  }>>;
  currentTheme: any;
  toast: (message: string, options?: any) => void;
};

const NewCardButton: React.FC<NewCardButtonProps> = ({ setCardData, currentTheme, toast }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          setCardData({
            name: "",
            title: "",
            email: "",
            link: "",
          });
          toast("New card created", {
            position: "bottom-right",
            duration: 2000,
          });
        }}
      >
        <FileText size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>New Card</p>
    </TooltipContent>
  </Tooltip>
);

export default NewCardButton;
