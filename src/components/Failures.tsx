
import React from 'react';

export const Failures: React.FC = () => {
  return (
    <div className="space-y-10 text-black">
      <header className="p-4 bg-red-50 border-2 border-red-900">
        <h1 className="text-2xl font-black text-red-900 uppercase">!! Error_Log: The Anti-Portfolio !!</h1>
        <p className="text-sm italic text-red-800 font-bold">"Learning is the process of extracting knowledge from broken implementations."</p>
      </header>

      <div className="space-y-8">
        <section className="border border-zinc-400 p-6 shadow-inner bg-white text-black">
          <h2 className="font-bold underline mb-2 uppercase text-black">Failure_01: The Recursive Loop of Death</h2>
          <p className="text-sm mb-4"><strong>Context:</strong> Early experiment with a custom web crawler in Node.js.</p>
          <p className="leading-relaxed text-black">
            I failed to properly normalize URLs, leading to an infinite crawl of a calendar page that generated infinite URLs. 
            The system ran out of heap memory and crashed the VPS.
          </p>
          <p className="text-zinc-600 text-xs mt-2 border-t pt-2 italic">
            LESSON: Always bound your recursion and sanitize your inputs. Never assume external data follows your logic.
          </p>
        </section>

        <section className="border border-zinc-400 p-6 shadow-inner bg-white text-black">
          <h2 className="font-bold underline mb-2 uppercase text-black">Failure_02: Premature Caching Layer</h2>
          <p className="text-sm mb-4"><strong>Context:</strong> .Net Backend for a simple blog.</p>
          <p className="leading-relaxed text-black">
            I implemented a complex Redis caching layer for queries that took 2ms to run. The overhead of managing 
            cache invalidation introduced more bugs and latency than it solved.
          </p>
          <p className="text-zinc-600 text-xs mt-2 border-t pt-2 italic">
            LESSON: Measure before you optimize. If it isn't slow, don't "fix" it.
          </p>
        </section>

        <section className="border border-zinc-400 p-6 shadow-inner bg-white text-black">
          <h2 className="font-bold underline mb-2 uppercase text-black">Failure_03: Ignoring the Network</h2>
          <p className="text-sm mb-4"><strong>Context:</strong> React SPA deployment.</p>
          <p className="leading-relaxed text-black">
            Built a beautiful interface on a 1Gbps home connection. When tested on a 3G mobile device in a basement, 
            the 4MB JavaScript bundle took 12 seconds to hydrate. The app was effectively unusable.
          </p>
          <p className="text-zinc-600 text-xs mt-2 border-t pt-2 italic">
            LESSON: Development environment is a lie. Throttling is a requirement, not a suggestion.
          </p>
        </section>
      </div>

      <div className="text-center p-4 border-2 border-dashed border-zinc-400">
        <p className="text-sm text-zinc-500 italic">
          I document these failures openly because they represent real growth. 
          A polished portfolio hides the engineer; a list of failures reveals the thinking.
        </p>
      </div>
    </div>
  );
};
