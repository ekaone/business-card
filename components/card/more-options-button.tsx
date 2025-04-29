import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { MoreHorizontal } from "lucide-react";

type MoreOptionsButtonProps = {
  onClick: () => void;
  currentTheme: any;
};

const MoreOptionsButton: React.FC<MoreOptionsButtonProps> = ({ onClick, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive}`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <MoreHorizontal size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>More options</p>
    </TooltipContent>
  </Tooltip>
);

export default MoreOptionsButton;
