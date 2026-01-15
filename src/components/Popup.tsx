
import React from 'react';

interface PopupProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  buttons?: { label: string; onClick: () => void }[];
}

export const Popup: React.FC<PopupProps> = ({ title, onClose, children, buttons }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/20 pointer-events-none">
      <div className="win95-border w-[350px] shadow-2xl pointer-events-auto">
        <div className="title-bar">
          <span>{title}</span>
          <button onClick={onClose} className="win95-button text-[10px] w-4 h-4 p-0">X</button>
        </div>
        <div className="p-2">
          <div className="bg-[#c0c0c0]">
            {children}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            {buttons?.map((btn, i) => (
              <button 
                key={i} 
                onClick={btn.onClick} 
                className="win95-button px-6 font-bold"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
