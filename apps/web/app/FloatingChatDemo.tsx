'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react';

export default function FloatingChatDemo() {
  // 移除鼠标位置跟踪
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // 只保留窗口大小调整的监听
  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  return (
    <div 
      className={`fixed right-4 z-40 transition-all duration-300 ease-out ${isMinimized ? 'w-12' : 'w-80'}`}
      style={{ 
        top: '80px', // 固定在顶部下方80px的位置
        opacity: isMinimized ? 1 : 0.85,
      }}
    >
      {isMinimized ? (
        <button 
          onClick={toggleMinimize}
          className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare size={20} />
        </button>
      ) : (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100 hover:opacity-100 transition-opacity">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">AI Assistant</span>
            <button 
              onClick={toggleMinimize}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Minimize2 size={16} />
            </button>
          </div>
          <div className="chat-container space-y-4">
            <div className="chat-item">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="typing-text text-sm">What can DeepSeek V3/R1 do?</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="mb-2 text-sm">DeepSeek V3/R1 is a state-of-the-art AI model that excels in:</p>
                <ul className="space-y-1 ml-2 text-sm">
                  <li>• Natural Language Processing</li>
                  <li>• Code Generation & Analysis</li>
                  <li>• Complex Problem Solving</li>
                  <li>• Multi-modal Understanding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}