import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ClipboardCopy } from "lucide-react";

type CopyJsonButtonProps = {
  onCopy: () => void;
  currentTheme: any;
};

const CopyJsonButton: React.FC<CopyJsonButtonProps> = ({ onCopy, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          onCopy();
        }}
      >
        <ClipboardCopy size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Copy JSON</p>
    </TooltipContent>
  </Tooltip>
);

export default CopyJsonButton;
