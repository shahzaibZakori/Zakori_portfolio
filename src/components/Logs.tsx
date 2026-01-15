
import React from 'react';

export const Logs: React.FC = () => {
  const logEntries = [
    {
      date: '2024-05-12',
      title: 'DETERMINISTIC_SIMULATION',
      content: 'Spent 4 hours debugging a flakey test. Lesson: Time is a global variable you cannot control in distributed tests. Always inject a MockClock.'
    },
    {
      date: '2024-04-30',
      title: 'TCP_NODELAY_IMPACT',
      content: 'Turning off Nagle\'s algorithm reduced small-packet RPC latency by 45ms. In high-frequency environments, the buffer delay is a silent killer.'
    },
    {
      date: '2024-03-15',
      title: 'ON_ABSTRACTIONS',
      content: 'Code duplication is cheaper than the wrong abstraction. Saw three modules coupled to an "ideal" interface that now needs 12 flags to work.'
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold uppercase underline decoration-zinc-400">Engineering_Journal.log</h2>
      <div className="space-y-6">
        {logEntries.map((log, i) => (
          <article key={i} className="win95-inset p-4 bg-zinc-50 border-l-4 border-black">
            <time className="text-[10px] text-zinc-500 font-mono block mb-1">[{log.date}]</time>
            <h3 className="text-black font-bold text-sm mb-2 uppercase">{log.title}</h3>
            <p className="text-zinc-700 text-sm leading-relaxed italic">"{log.content}"</p>
          </article>
        ))}
      </div>
      <div className="p-4 bg-blue-50 border border-blue-100 text-xs text-blue-900 italic">
        * Entries represent real observations made during the "break and fix" phase of independent learning.
      </div>
    </div>
  );
};
