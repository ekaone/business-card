import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Download } from "lucide-react";

type DownloadJsonButtonProps = {
  onDownload: () => void;
  currentTheme: any;
};

const DownloadJsonButton: React.FC<DownloadJsonButtonProps> = ({ onDownload, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          onDownload();
        }}
      >
        <Download size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Download JSON</p>
    </TooltipContent>
  </Tooltip>
);

export default DownloadJsonButton;
