import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { RefreshCw } from "lucide-react";

type RefreshButtonProps = {
  onFlip: () => void;
  currentTheme: any;
};

const RefreshButton: React.FC<RefreshButtonProps> = ({ onFlip, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
      >
        <RefreshCw size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Flip Card</p>
    </TooltipContent>
  </Tooltip>
);

export default RefreshButton;
