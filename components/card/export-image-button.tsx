import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Image } from "lucide-react";

type ExportImageButtonProps = {
  onExport: () => void;
  currentTheme: any;
};

const ExportImageButton: React.FC<ExportImageButtonProps> = ({ onExport, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          onExport();
        }}
      >
        <Image size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Export as Image</p>
    </TooltipContent>
  </Tooltip>
);

export default ExportImageButton;
