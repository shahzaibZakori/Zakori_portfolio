
import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../App';

interface TerminalProps {
  onClose: () => void;
  onNavigate: (s: Section) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onClose, onNavigate }) => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to STK_OS v2.4.0 (LEGACY_KERNEL)',
    'UNIX Environment Emulation Layer Active.',
    'Ready.',
    'Type "help" for a list of available commands.',
    ''
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response: string[] = [];

    switch (cmd) {
      case 'help':
        response = [
          'AVAILABLE COMMANDS:',
          '  about     - View professional profile',
          '  projects  - View engineering case studies',
          '  contact   - View communication protocols',
          '  ls        - List directory contents',
          '  cat       - View file (e.g., cat bio.txt)',
          '  clear     - Clear screen',
          '  whoami    - Current user status',
          '  exit      - Close terminal window'
        ];
        break;
      case 'ls':
        response = ['bio.txt', 'stack.sys', 'failures.log', 'projects/'];
        break;
      case 'whoami':
        response = ['USER: GUEST_ENGINEER', 'STATUS: AUTHENTICATED', 'SHELL: /bin/bash'];
        break;
      case 'about':
        onNavigate(Section.ABOUT);
        response = ['Opening Profile Manifest in Browser...'];
        break;
      case 'projects':
        onNavigate(Section.PROJECTS);
        response = ['Opening Projects in Browser...'];
        break;
      case 'contact':
        onNavigate(Section.CONTACT);
        response = ['Opening Communication Protocols in Browser...'];
        break;
      case 'cat bio.txt':
        response = [
          'BIO_DATA:',
          'Self-taught full-stack developer.',
          'Focus: Fundamentals over trends.',
          'Core Stack: .Net, C++, TypeScript, SQL, Node.js.'
        ];
        break;
      case 'clear':
        setHistory(['']);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      case '':
        break;
      default:
        response = [`Error: '${cmd}' is not recognized as an internal or external command.`, `Type "help" for a list of commands.`];
    }

    setHistory([...history, `root@engineer:~$ ${input}`, ...response, '']);
    setInput('');
  };

  return (
    <div 
      className="terminal-window h-full flex flex-col cursor-text" 
      ref={scrollRef}
      onClick={() => document.getElementById('term-input')?.focus()}
    >
      <div className="grow overflow-y-auto mb-2 text-xs leading-tight">
        {history.map((line, i) => (
          <div key={i} className="min-h-[1.2em]">{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="flex gap-2 text-xs">
        <span className="text-green-500 font-bold">root@engineer:~$</span>
        <input
          id="term-input"
          autoFocus
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
      </form>
    </div>
  );
};
