import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Folder } from "lucide-react";

type FolderButtonProps = {
  onClick: () => void;
  currentTheme: any;
};

const FolderButton: React.FC<FolderButtonProps> = ({ onClick, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive} mr-2`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <Folder size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Folder</p>
    </TooltipContent>
  </Tooltip>
);

export default FolderButton;
