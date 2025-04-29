"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import {
  Download,
  ImageIcon,
  Mail,
  Globe,
  FileText,
  ClipboardCopy,
  FolderClosed,
  RefreshCw,
  Code,
  MoreHorizontal,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { themes } from "@/data/themes";
import CardHeader from "../components/card/card-header";
import NewCardButton from "../components/card/new-card-button";
import CopyJsonButton from "../components/card/copy-json-button";
import FolderButton from "../components/card/folder-button";
import DownloadJsonButton from "../components/card/download-json-button";
import RefreshButton from "../components/card/refresh-button";
import CodeThemeButton from "../components/card/code-theme-button";
import ExportImageButton from "../components/card/export-image-button";
import MoreOptionsButton from "../components/card/more-options-button";
import CardEditForm from "../components/card/card-edit-form";
import ThemeDialog from "../components/card/theme-dialog";

export default function Home() {
  const [cardData, setCardData] = useState({
    name: "Britney Spears",
    title: "Singer",
    email: "britney@mail.com",
    link: "britneyspears.com",
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [theme, setTheme] = useState("vscode");
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);
  const modernCardRef = useRef<HTMLDivElement>(null);
  const isExporting = useRef(false);

  const currentTheme = themes[theme as keyof typeof themes];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFlip = () => {
    if (isExporting.current) return;
    setIsFlipped(!isFlipped);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(cardData, null, 2));
    toast("Copied to clipboard", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  const downloadJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(cardData, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "business-card.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const exportAsImage = async () => {
    isExporting.current = true;

    // Make sure we're showing the modern card view for export
    const wasFlipped = isFlipped;
    if (!wasFlipped) {
      setIsFlipped(true);
    }

    // Wait for the state update and animation to complete
    setTimeout(async () => {
      try {
        if (modernCardRef.current) {
          const dataUrl = await toPng(modernCardRef.current, {
            quality: 0.95,
            skipFonts: true,
            fontEmbedCSS: "",
            style: {
              transform: "none",
              borderRadius: "8px",
              overflow: "hidden",
            },
          });

          const link = document.createElement("a");
          link.download = "business-card.png";
          link.href = dataUrl;
          link.click();

          // Restore the original flip state if needed
          if (!wasFlipped) {
            setTimeout(() => {
              setIsFlipped(false);
              isExporting.current = false;
            }, 300);
          } else {
            isExporting.current = false;
          }
        }
      } catch (error) {
        console.error("Error exporting image:", error);
        toast("Export failed", {
          position: "bottom-right",
          duration: 2000,
        });

        // Restore the original flip state if needed
        if (!wasFlipped) {
          setIsFlipped(false);
        }
        isExporting.current = false;
      }
    }, 300); // Wait for flip animation to complete
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Code-Styled Business Card Generator
      </h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Card Preview */}
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Preview
          </h2>
          <div className="perspective-1000 w-full max-w-md">
            <motion.div
              className="w-full relative preserve-3d"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of Card - Code Style */}
              <div
                id="code-card"
                className={`${
                  isFlipped ? "backface-hidden" : ""
                } rounded-lg overflow-hidden shadow-xl w-full ${
                  currentTheme.bg
                } border ${currentTheme.border}`}
                onClick={handleFlip}
              >
                {/* Card Header */}
                <CardHeader currentTheme={currentTheme} />

                {/* Toolbar with functional buttons */}
                <div
                  className={`p-2 border-b border-gray-700 flex items-center ${currentTheme.toolbarBg}`}
                >
                  <TooltipProvider>
                    {/* New Document */}
                    <NewCardButton setCardData={setCardData} currentTheme={currentTheme} toast={toast} />

                    {/* Copy JSON */}
                    <CopyJsonButton onCopy={copyToClipboard} currentTheme={currentTheme} />

                    {/* Folder */}
                    <FolderButton onClick={() => toast("Folder functionality not implemented yet.", { position: "bottom-right", duration: 2000 })} currentTheme={currentTheme} />

                    {/* Download JSON */}
                    <DownloadJsonButton onDownload={downloadJSON} currentTheme={currentTheme} />

                    {/* Refresh */}
                    <RefreshButton onFlip={() => setIsFlipped(!isFlipped)} currentTheme={currentTheme} />

                    {/* Code/Theme */}
                    <CodeThemeButton onThemeDialogOpen={() => setThemeDialogOpen(true)} currentTheme={currentTheme} />

                    <div className="flex-1"></div>

                    {/* Export as Image */}
                    <ExportImageButton onExport={exportAsImage} currentTheme={currentTheme} />

                    {/* More options */}
                    <MoreOptionsButton onClick={() => toast("More options functionality not implemented yet.", { position: "bottom-right", duration: 2000 })} currentTheme={currentTheme} />
                  </TooltipProvider>
                </div>

                {/* Card Content */}
                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-500 w-8">1</span>
                    <span className={`${currentTheme.text}`}>
                      Business Card.json
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">2</span>
                    <span className={`${currentTheme.text}`}>{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">3</span>
                    <span className="ml-4">
                      <span className={`${currentTheme.key}`}>"name"</span>
                      <span className={`${currentTheme.text}`}>: </span>
                      <span className={`${currentTheme.value}`}>
                        "{cardData.name}"
                      </span>
                      <span className={`${currentTheme.text}`}>,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">4</span>
                    <span className="ml-4">
                      <span className={`${currentTheme.key}`}>"title"</span>
                      <span className={`${currentTheme.text}`}>: </span>
                      <span className={`${currentTheme.value}`}>
                        "{cardData.title}"
                      </span>
                      <span className={`${currentTheme.text}`}>,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">5</span>
                    <span className="ml-4">
                      <span className={`${currentTheme.key}`}>"email"</span>
                      <span className={`${currentTheme.text}`}>: </span>
                      <span className={`${currentTheme.value}`}>
                        "{cardData.email}"
                      </span>
                      <span className={`${currentTheme.text}`}>,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">6</span>
                    <span className="ml-4">
                      <span className={`${currentTheme.key}`}>"link"</span>
                      <span className={`${currentTheme.text}`}>: </span>
                      <span className={`${currentTheme.value}`}>
                        "{cardData.link}"
                      </span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-8">7</span>
                    <span className={`${currentTheme.text}`}>{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Back of Card - Modern UI */}
              <div
                ref={modernCardRef}
                className={`${
                  isFlipped ? "" : "backface-hidden"
                } absolute inset-0 rounded-lg overflow-hidden shadow-xl ${
                  currentTheme.modernBg
                } border ${currentTheme.border} rotateY-180`}
                onClick={handleFlip}
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Header with dots */}
                  <div className="p-3 border-b border-gray-700 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${currentTheme.dots[0]}`}
                      ></div>
                      <div
                        className={`w-3 h-3 rounded-full ${currentTheme.dots[1]}`}
                      ></div>
                      <div
                        className={`w-3 h-3 rounded-full ${currentTheme.dots[2]}`}
                      ></div>
                    </div>
                    <div
                      className={`text-center flex-1 ${currentTheme.text} font-medium`}
                    >
                      Business Card
                    </div>
                    <div className="text-gray-400">•••</div>
                  </div>

                  {/* Modern Card Content */}
                  <div className="flex-1 flex flex-col justify-center items-center p-6 text-white">
                    {/* Profile Section */}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-3xl font-bold bg-opacity-20 border-2 border-white border-opacity-20">
                      {cardData.name.charAt(0)}
                    </div>

                    <h2 className="text-2xl font-bold mb-1">{cardData.name}</h2>
                    <div
                      className={`h-1 w-16 ${currentTheme.accent} rounded-full mb-3`}
                    ></div>
                    <p className="text-gray-300 mb-6">{cardData.title}</p>

                    {/* Contact Info - Hidden in the exported image for simplicity */}
                    <div className="w-full max-w-xs space-y-3 export-hide">
                      <div
                        className={`${currentTheme.cardBg} p-3 rounded-lg flex items-center`}
                      >
                        <Mail className="mr-3 h-5 w-5 text-gray-400" />
                        <span className="text-sm">{cardData.email}</span>
                      </div>

                      <div
                        className={`${currentTheme.cardBg} p-3 rounded-lg flex items-center`}
                      >
                        <Globe className="mr-3 h-5 w-5 text-gray-400" />
                        <span className="text-sm">{cardData.link}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer - Hidden in exported image */}
                  <div className="p-3 border-t border-gray-700 flex justify-center export-hide">
                    <p className="text-xs text-gray-400">Click to flip</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Edit Your Card
          </h2>
          <CardEditForm cardData={cardData} handleInputChange={handleInputChange} />
        </div>
      </div>

      {/* Theme Dialog */}
      <ThemeDialog open={themeDialogOpen} onOpenChange={setThemeDialogOpen} theme={theme} setTheme={setTheme} />
    </div>
  );
}
