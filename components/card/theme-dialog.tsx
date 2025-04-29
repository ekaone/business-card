import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type ThemeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeDialog: React.FC<ThemeDialogProps> = ({ open, onOpenChange, theme, setTheme }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="bg-white">
      <DialogHeader>
        <DialogTitle>Select Theme</DialogTitle>
      </DialogHeader>
      <Select
        value={theme}
        onValueChange={(value) => {
          setTheme(value);
          onOpenChange(false);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vscode">VS Code</SelectItem>
          <SelectItem value="monokai">Monokai</SelectItem>
          <SelectItem value="dracula">Dracula</SelectItem>
          <SelectItem value="github">GitHub Dark</SelectItem>
          <SelectItem value="nord">Nord</SelectItem>
        </SelectContent>
      </Select>
    </DialogContent>
  </Dialog>
);

export default ThemeDialog;
