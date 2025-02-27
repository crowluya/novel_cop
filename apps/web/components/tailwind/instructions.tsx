"use client";

import { Info } from "lucide-react";

const Instructions = () => {
  return (
    <div className="w-full max-w-screen-lg mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Info className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-medium text-blue-800">Instructions</h3>
      </div>
      <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
        <li>Begin by writing or pasting your content (essay, article, email, etc.).</li>
        <li>Use ++ (two plus signs) to extend your writing at any point.</li>
        <li>Press / (slash) to access a menu of AI writing commands.</li>
        <li>Highlight text to view AI-powered editing options for the selected content.</li>
        <li>Can be used on mobile devices such as phones and tablets.</li>
      </ol>
    </div>
  );
};

export default Instructions;