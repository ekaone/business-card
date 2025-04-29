import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Code } from "lucide-react";

type CodeThemeButtonProps = {
  onThemeDialogOpen: () => void;
  currentTheme: any;
};

const CodeThemeButton: React.FC<CodeThemeButtonProps> = ({ onThemeDialogOpen, currentTheme }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={`p-1.5 rounded text-gray-400 ${currentTheme.toolbarHover} ${currentTheme.toolbarActive}`}
        onClick={(e) => {
          e.stopPropagation();
          onThemeDialogOpen();
        }}
      >
        <Code size={18} />
      </button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Change Theme</p>
    </TooltipContent>
  </Tooltip>
);

export default CodeThemeButton;
