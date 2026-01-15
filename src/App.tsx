
import React, { useState, useEffect } from 'react';
import { About } from './components/About';
import { DeepDive } from './components/DeepDive';
import { Logs } from './components/Logs';
import { Failures } from './components/Failures';
import { Archive } from './components/Archive';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  LOGS = 'logs',
  FAILURES = 'failures',
  ARCHIVE = 'archive',
  CONTACT = 'contact'
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  // Defaulting to false so only the Desktop is visible first as requested
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isBrowserMinimized, setIsBrowserMinimized] = useState(false);
  const [isBrowserMaximized, setIsBrowserMaximized] = useState(false);
  const [browserPosition, setBrowserPosition] = useState({ top: 20, left: 100 });
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [browserSize, setBrowserSize] = useState({ width: 'min(900px, 80%)', height: 'min(700px, 85%)' });
  const [isLoading, setIsLoading] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isRebooting, setIsRebooting] = useState(false);
  const [focusedWindow, setFocusedWindow] = useState<'browser' | 'terminal' | null>(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Internal restart logic to avoid "File Not Found" browser errors
  const handleRestart = () => {
    setIsStartMenuOpen(false);
    setIsRebooting(true);
    
    // Simulate system shutdown and internal state reset
    setTimeout(() => {
      setIsBrowserOpen(false);
      setIsBrowserMinimized(false);
      setIsBrowserMaximized(false);
      setBrowserPosition({ top: 20, left: 100 });
      setBrowserSize({ width: 'min(900px, 80%)', height: 'min(700px, 85%)' });
      setIsTerminalOpen(false);
      setActiveSection(Section.HOME);
      setFocusedWindow(null);
      setIsRebooting(false);
    }, 4000);
  };

  const handleBrowserMinimize = () => {
    setIsBrowserMinimized(true);
    setFocusedWindow(null);
  };

  const handleBrowserMaximize = () => {
    if (isBrowserMaximized) {
      // Restore to normal size
      setIsBrowserMaximized(false);
      setBrowserPosition({ top: 20, left: 100 });
      setBrowserSize({ width: 'min(900px, 80%)', height: 'min(700px, 85%)' });
    } else {
      // Maximize
      setIsBrowserMaximized(true);
      setBrowserPosition({ top: 0, left: 0 });
      setBrowserSize({ width: '100vw', height: 'calc(100vh - 28px)' });
    }
  };

  const navigate = (section: Section) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsBrowserOpen(true);
      setIsBrowserMinimized(false);
      setFocusedWindow('browser');
      setIsStartMenuOpen(false);
      setIsLoading(false);
    }, 800); // Simulate loading time
  };

  if (isRebooting) {
    return (
      <div className="w-screen h-screen bg-black text-white font-mono p-10 flex flex-col gap-2 overflow-hidden select-none z-20000">
        <p>AWARD Software Modular BIOS v4.51PG</p>
        <p>Copyright (C) 1984-95, Award Software, Inc.</p>
        <br />
        <p>PENTIUM-S CPU at 133MHz</p>
        <p>Memory Test : 65536K OK</p>
        <br />
        <p>Detecting HDD Primary Master ... Found [ST31276A]</p>
        <p>Detecting HDD Primary Slave  ... None</p>
        <p>Detecting HDD Secondary Master... Found [CD-ROM]</p>
        <br />
        <p className="animate-pulse">Loading SYSTEM_MANIFEST_4.0.5...</p>
        <p>Checking System Integrity... [OK]</p>
        <p>Initializing UNIX Emulation Layer... [OK]</p>
        <p>Starting Netscape Navigator Kernel... [OK]</p>
        <br />
        <p className="text-yellow-400 font-bold">SYSTEM RESTART IN PROGRESS - PLEASE WAIT...</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden flex flex-col select-none bg-[#3a6ea5]">
      {/* Desktop Space */}
      <main className="grow relative p-4" onClick={() => setIsStartMenuOpen(false)}>
        
        {/* Desktop Icons */}
        <div className="flex flex-col z-0">
          <div 
            className="desktop-icon" 
            onClick={() => { setIsBrowserOpen(true); setFocusedWindow('browser'); }}
            onMouseEnter={(e) => {
              setShowTooltip('Netscape Navigator 4.0 - The World Wide Web');
              setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
            }}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="icon-box">🌐</div>
            <span className="text-white">Netscape Navigator</span>
          </div>
          <div 
            className="desktop-icon" 
            onClick={() => { setIsTerminalOpen(true); setFocusedWindow('terminal'); }}
            onMouseEnter={(e) => {
              setShowTooltip('MS-DOS Prompt - Command Line Interface');
              setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
            }}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="icon-box">📟</div>
            <span className="text-white">MS-DOS Prompt</span>
          </div>
          <div 
            className="desktop-icon" 
            onClick={() => navigate(Section.CONTACT)}
            onMouseEnter={(e) => {
              setShowTooltip('Contact Information and Communication');
              setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
            }}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="icon-box">📧</div>
            <span className="text-white">Contact</span>
          </div>
          <div 
            className="desktop-icon" 
            onClick={() => navigate(Section.FAILURES)}
            onMouseEnter={(e) => {
              setShowTooltip('Recycle Bin - Contains deleted files');
              setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
            }}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="icon-box">🗑️</div>
            <span className="text-white">Recycle Bin</span>
          </div>
          <div 
            className="desktop-icon" 
            onDoubleClick={() => navigate(Section.PROJECTS)}
            onMouseEnter={(e) => {
              setShowTooltip('My Documents - Double-click to open');
              setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
            }}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <div className="icon-box">📁</div>
            <span className="text-white">My Documents</span>
          </div>
        </div>

        {/* Retro Tooltip */}
        {showTooltip && (
          <div 
            className="tooltip"
            style={{ 
              left: `${tooltipPosition.x}px`, 
              top: `${tooltipPosition.y}px` 
            }}
          >
            {showTooltip}
          </div>
        )}

        {/* Centered Name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="text-white text-6xl font-bold italic animate-pulse" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: 'serif' }}>
            Shahzaib Zakori
          </div>
        </div>
        {isBrowserOpen && !isBrowserMinimized && (
          <div 
            className={`win95-border absolute flex flex-col shadow-lg transition-all ${focusedWindow === 'browser' ? 'z-50' : 'z-10'}`}
            style={{ 
              top: `${browserPosition.top}px`, 
              left: `${browserPosition.left}px`, 
              width: browserSize.width, 
              height: browserSize.height,
            }}
            onClick={(e) => { e.stopPropagation(); setFocusedWindow('browser'); }}
          >
            <div className={`title-bar ${focusedWindow !== 'browser' ? 'inactive' : ''}`}>
              <div className="flex items-center gap-1">
                <span>🌐</span>
                <span>Netscape Navigator - [engineer.profile]</span>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={handleBrowserMinimize} 
                  className="win95-button w-4 h-4 p-0"
                  title="Minimize"
                >
                  _
                </button>
                <button 
                  onClick={handleBrowserMaximize} 
                  className="win95-button w-4 h-4 p-0"
                  title={isBrowserMaximized ? "Restore" : "Maximize"}
                >
                  {isBrowserMaximized ? '❐' : '□'}
                </button>
                <button 
                  onClick={() => setIsBrowserOpen(false)} 
                  className="win95-button w-4 h-4 p-0 font-bold"
                  title="Close"
                >
                  X
                </button>
              </div>
            </div>
            <div className="menu-bar">
              <span>File</span><span>Edit</span><span>View</span><span>Go</span><span>Bookmarks</span><span>Help</span>
            </div>
            <div className="flex gap-1 p-1 border-b border-zinc-400 bg-[#c0c0c0]">
              <button onClick={() => navigate(Section.HOME)} className="win95-button px-4 py-1">
                🏠 Home
              </button>
              <button onClick={() => navigate(Section.ABOUT)} className="win95-button px-4 py-1">
                👤 About
              </button>
              <button onClick={() => navigate(Section.PROJECTS)} className="win95-button px-4 py-1">
                🏗️ Projects
              </button>
              <button onClick={() => navigate(Section.CONTACT)} className="win95-button px-4 py-1">
                📧 Contact
              </button>
              <div className="w-px h-6 bg-zinc-500 mx-1"></div>
              <div className="win95-inset grow bg-white px-2 py-1 text-xs truncate text-black">
                http://www.engineer-proto.local/{activeSection}.html
              </div>
            </div>
            {/* White content area with explicit black text */}
            <div className="grow bg-white win95-inset m-1 overflow-auto p-8 text-black">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌐</div>
                    <div className="text-lg font-bold mb-2">Connecting to engineer-proto.local...</div>
                    <div className="text-sm text-zinc-600 mb-4">Looking up host...</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {activeSection === Section.HOME && <Home onNavigate={navigate} />}
                  {activeSection === Section.ABOUT && <About />}
                  {activeSection === Section.PROJECTS && <DeepDive />}
                  {activeSection === Section.LOGS && <Logs />}
                  {activeSection === Section.FAILURES && <Failures />}
                  {activeSection === Section.ARCHIVE && <Archive />}
                  {activeSection === Section.CONTACT && <Contact />}
                </>
              )}
            </div>
            {/* Status Bar */}
            <div className="status-bar">
              <span className="text-xs">{isLoading ? 'Transferring data from engineer-proto.local...' : 'Document: Done'}</span>
              <span className="text-xs">Netscape Navigator 4.0</span>
              <span className="text-xs">{isLoading ? 'Connecting...' : 'SSL: Secure Connection'}</span>
            </div>
          </div>
        )}

        {/* Terminal Window */}
        {isTerminalOpen && (
          <div 
            className={`win95-border absolute flex flex-col shadow-lg ${focusedWindow === 'terminal' ? 'z-50' : 'z-10'}`}
            style={{ top: '60px', left: '140px', width: '600px', height: '400px' }}
            onClick={(e) => { e.stopPropagation(); setFocusedWindow('terminal'); }}
          >
            <div className={`title-bar ${focusedWindow !== 'terminal' ? 'inactive' : ''}`}>
              <div className="flex items-center gap-1">
                <span>📟</span>
                <span>MS-DOS Prompt</span>
              </div>
              <button onClick={() => setIsTerminalOpen(false)} className="win95-button w-4 h-4 p-0 font-bold">X</button>
            </div>
            <div className="grow bg-black p-1 overflow-hidden">
              <Terminal onNavigate={navigate} onClose={() => setIsTerminalOpen(false)} />
            </div>
          </div>
        )}
      </main>

      {/* Start Menu */}
      {isStartMenuOpen && (
        <div className="start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="start-menu-sidebar">
            <span className="start-menu-text">ENGINEER 95</span>
          </div>
          <div className="start-menu-items">
            <div className="start-menu-item" onClick={() => navigate(Section.ABOUT)}>👤 Profile Manifest</div>
            <div className="start-menu-item" onClick={() => navigate(Section.PROJECTS)}>🏗️ Deep Architecture</div>
            <div className="start-menu-item" onClick={() => navigate(Section.CONTACT)}>📧 Communication Protocols</div>
            <div className="start-menu-item" onClick={() => navigate(Section.FAILURES)}>⚠️ Anti-Portfolio</div>
            <div className="h-px bg-zinc-400 my-1 mx-2"></div>
            <div className="start-menu-item" onClick={() => { setIsTerminalOpen(true); setIsStartMenuOpen(false); }}>📟 MS-DOS Prompt</div>
            <div className="start-menu-item" onClick={handleRestart}>🚪 Restart...</div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <footer className="taskbar">
        <button 
          className={`win95-button start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setIsStartMenuOpen(!isStartMenuOpen); }}
        >
          <span className="mr-1 text-sm">📁</span> Start
        </button>
        <div className="w-px h-full bg-zinc-500 mx-1"></div>
        
        {isBrowserOpen && (
          <button 
            className={`win95-button flex-1 max-w-40 justify-start px-2 ${focusedWindow === 'browser' ? 'active' : ''}`}
            onClick={() => { 
              setIsBrowserOpen(true); 
              setIsBrowserMinimized(false);
              setFocusedWindow('browser'); 
            }}
          >
            <span className="mr-2">🌐</span> <span className="truncate text-black">Netscape</span>
          </button>
        )}
        {isTerminalOpen && (
          <button 
            className={`win95-button flex-1 max-w-40 justify-start px-2 ${focusedWindow === 'terminal' ? 'active' : ''}`}
            onClick={() => { setIsTerminalOpen(true); setFocusedWindow('terminal'); }}
          >
            <span className="mr-2 text-black">📟</span> <span className="truncate text-black">MS-DOS</span>
          </button>
        )}

        <div className="grow"></div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-1 mr-2">
          <a href="https://github.com/shahzaibZakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">🐙</a>
          <a href="https://youtube.com/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">📺</a>
          <a href="https://instagram.com/shahzaibzakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">📷</a>
          <a href="https://linkedin.com/in/shahzaibzakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">💼</a>
          <a href="https://threads.net/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">🧵</a>
          <a href="https://tiktok.com/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="win95-button p-1 text-sm">🎵</a>
        </div>
        <div className="win95-inset px-2 h-full flex items-center text-[10px] gap-2 bg-[#c0c0c0] min-w-25 justify-center text-black">
          <span>🔊</span>
          <span className="font-mono text-black">{time}</span>
        </div>
      </footer>
    </div>
  );
};

const Home: React.FC<{ onNavigate: (s: Section) => void }> = ({ onNavigate }) => (
  <div className="font-serif text-black">
    <div className="text-center mb-10 pb-6 border-b-2 border-zinc-200">
      <h1 className="text-4xl font-black italic tracking-tighter text-black uppercase">Engineer_Workspace</h1>
      <p className="text-xs font-bold mt-2 text-black">Professional Release 4.0.5 - Node: [STATION-01]</p>
    </div>

    <div className="space-y-8">
      <div className="bg-zinc-50 p-6 border border-zinc-300">
        <h2 className="text-xl font-bold underline mb-4 uppercase text-black">Identity_Profile</h2>
        <p className="leading-relaxed text-lg mb-4 text-black">
          I am a <strong>student and self-taught full-stack developer</strong> focused on <strong>fundamentals, systems thinking, and real-world constraints</strong>.
        </p>
        <button 
          onClick={() => onNavigate(Section.ABOUT)}
          className="win95-button font-bold text-blue-800"
        >
          Read_Full_Manifest.txt
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="win95-inset p-4 bg-white text-black">
          <h3 className="font-bold text-base mb-2 underline uppercase text-black">Deep_Dive</h3>
          <p className="text-sm text-zinc-600 mb-4">Real-time state synchronization using Socket.IO and Redis logic.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Section.PROJECTS); }} className="text-xs font-bold text-blue-800 underline">Open Study...</a>
        </div>
        <div className="win95-inset p-4 bg-white text-black">
          <h3 className="font-bold text-base mb-2 underline uppercase text-black">Anti_Portfolio</h3>
          <p className="text-sm text-zinc-600 mb-4">A documented record of architectural failures and the lessons extracted.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Section.FAILURES); }} className="text-xs font-bold text-red-700 underline">View Logs...</a>
        </div>
        <div className="win95-inset p-4 bg-white text-black">
          <h3 className="font-bold text-base mb-2 underline uppercase text-black">Contact</h3>
          <p className="text-sm text-zinc-600 mb-4">Direct communication channels, email forms, and one-to-one call booking.</p>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Section.CONTACT); }} className="text-xs font-bold text-green-700 underline">Get In Touch...</a>
        </div>
      </div>

      <div className="border-t border-zinc-200 pt-6 text-[11px] text-zinc-500">
        <p className="font-bold mb-1 underline text-black uppercase">SYSTEM_NOTE:</p>
        <p className="text-black leading-relaxed">This workspace is intentionally constructed using legacy design principles. Use the desktop icons or the Start menu for navigation. Advanced users should use the MS-DOS prompt.</p>
      </div>
    </div>
  </div>
);

export default App;
