
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-8 max-w-xl text-black">
      <h2 className="font-bold uppercase text-base underline decoration-zinc-700">Communication_Protocols</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Primary_Link</h3>
          <div className="win95-inset p-4 font-bold text-lg bg-white">
            <a href="mailto:engineer@system-arch.org" className="text-blue-700 underline">
              engineer@system-arch.org
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Node_Locations</h3>
          <ul className="space-y-2 text-sm win95-inset p-4 bg-white">
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">GitHub</span>
              <a href="https://github.com/system-architect" className="text-blue-700 underline">/system-architect</a>
            </li>
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">LinkedIn</span>
              <a href="#" className="text-blue-700 underline">/in/system-arch</a>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-zinc-600">PGP_Key</span>
              <span className="text-zinc-400">0x8FB4A... (Request via SMTP)</span>
            </li>
          </ul>
        </section>

        <section className="bg-zinc-50 p-4 text-xs text-zinc-600 border-l-4 border-zinc-400">
          <p>
            I am available for deep technical discussions, architecture reviews, and high-impact engineering roles. 
            I do not respond to generic recruiter spam or "hype-based" opportunities. 
            Please provide technical context in your first outreach.
          </p>
        </section>
      </div>
    </div>
  );
};
