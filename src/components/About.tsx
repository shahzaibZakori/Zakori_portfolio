
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="space-y-10 font-serif text-black">
      <header className="border-b-4 border-double border-black pb-4">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-black">Manifest: User_Identity_V4</h1>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold italic underline text-black">01. Summary_Record</h2>
        <p className="leading-relaxed text-black">
          I am a <strong>student and self-taught full-stack web developer</strong> with a strong focus on <strong>fundamentals, systems thinking, and real-world constraints</strong>. I intentionally avoid over-engineering and surface-level polish.
        </p>
        <p className="leading-relaxed text-black">
          My journey began with breaking systems and fixing them. Over time, I transitioned from simply "making things work" to understanding <strong>why</strong> systems behave the way they do, specifically around performance, scalability, and structural trade-offs.
        </p>
      </section>

      <section className="space-y-4 bg-zinc-50 p-6 border border-zinc-300">
        <h2 className="text-xl font-bold italic underline text-black">02. Engineering_Philosophy</h2>
        <p className="text-sm mb-2 text-black">Core values prioritized over buzzwords:</p>
        <ul className="list-disc ml-8 space-y-2 text-sm italic text-black">
          <li><strong>Clarity over Cleverness:</strong> Code should explain itself, not hide behind complexity.</li>
          <li><strong>Simplicity over Abstraction:</strong> Only abstract when duplication becomes a real liability.</li>
          <li><strong>Correctness before Optimization:</strong> Verify the logic before tuning the machine.</li>
          <li><strong>Constraint-First:</strong> Building for low-end devices and high-latency networks.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold italic underline text-black">03. Tech_Stack_Inventory</h2>
        <table className="w-full border-collapse border border-zinc-800 text-xs text-black">
          <thead>
            <tr className="bg-zinc-200">
              <th className="border border-zinc-800 p-2 text-left uppercase text-black">Module</th>
              <th className="border border-zinc-800 p-2 text-left uppercase text-black">Payload_Contents</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-800 p-2 font-bold text-black">Base Languages</td>
              <td className="border border-zinc-800 p-2 text-black">HTML, CSS, JavaScript, TypeScript, C#, C++, SQL</td>
            </tr>
            <tr>
              <td className="border border-zinc-800 p-2 font-bold text-black">Runtimes / Frameworks</td>
              <td className="border border-zinc-800 p-2 text-black">Node.js, Express.js, .Net, React, Next.js</td>
            </tr>
            <tr>
              <td className="border border-zinc-800 p-2 font-bold text-black">Persistence</td>
              <td className="border border-zinc-800 p-2 text-black">MongoDB, PostgreSQL, MS SQL Server, Redis</td>
            </tr>
            <tr>
              <td className="border border-zinc-800 p-2 font-bold text-black">Protocols</td>
              <td className="border border-zinc-800 p-2 text-black">HTTP, Socket.IO, WebSocket</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="pt-8 border-t border-zinc-300 text-[11px] italic text-zinc-500">
        "I believe good engineers must be able to clearly explain complex ideas without hiding behind jargon. This portfolio demonstrates thinking, decision-making, and growth."
      </div>
    </div>
  );
};
