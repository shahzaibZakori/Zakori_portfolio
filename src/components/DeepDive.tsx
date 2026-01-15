
import React from 'react';

export const DeepDive: React.FC = () => {
  return (
    <div className="space-y-12 text-black">
      <header>
        <h1 className="text-3xl font-black uppercase">Case_Study: RT-Comm_Engine</h1>
        <p className="text-zinc-500 italic mt-2">Implementation of a low-latency state synchronization system using Socket.IO and Redis.</p>
      </header>

      <section className="space-y-4">
        <h3 className="font-bold border-b border-black text-lg uppercase text-black">I. The_Problem</h3>
        <p className="text-black">
          Collaborative applications often fail on high-latency mobile networks due to head-of-line blocking and massive JSON payloads. 
          The requirement was a system that could synchronize state across 50+ concurrent users with sub-100ms updates on 3G connections.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-bold border-b border-black text-lg uppercase text-black">II. Architectural_Decisions</h3>
        <ul className="list-decimal ml-8 space-y-4 text-black">
          <li>
            <strong>Pub/Sub with Redis:</strong> Horizontal scaling was non-negotiable. Using Redis as a backplane allowed multiple 
            Node.js instances to broadcast state without becoming single points of failure.
          </li>
          <li>
            <strong>Delta-Encoding:</strong> Instead of sending the full state object (4KB), we calculated diffs on the server 
            and pushed only changed bytes (typically &lt;100B).
          </li>
          <li>
            <strong>Binary Serialization:</strong> Swapped JSON for a flat buffer-like binary structure in high-frequency channels, 
            reducing parse time on low-end ARM processors.
          </li>
        </ul>
      </section>

      <div className="bg-blue-50 p-6 border-l-4 border-blue-800 text-sm">
        <h4 className="font-bold mb-2 text-black uppercase">Engineering_Trade_Off</h4>
        <p className="text-black">
          We sacrificed <strong>Total Eventual Order</strong> for <strong>Immediate Local Feedback</strong>. 
          Implementing client-side prediction made the app feel "instant," but forced us to write complex conflict resolution 
          logic for when the server disagreed with the client's projected state.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="font-bold border-b border-black text-lg uppercase text-black">III. Outcome_&_Learnings</h3>
        <p className="text-black">
          The system remained stable at 5,000 active sockets. However, a major bottleneck was discovered in the Node.js event loop 
          during large broadcasts. 
        </p>
        <div className="win95-inset font-mono text-xs bg-zinc-100 p-2 text-black">
          FIX_LOG: Offloaded JSON.stringify calls to a Worker thread pool to prevent blocking the main IO loop. 
          Latency p99 dropped from 450ms to 85ms.
        </div>
      </section>
    </div>
  );
};
