
import React from 'react';

export const Archive: React.FC = () => {
  const projects = [
    { year: '2025', name: 'SDRS', role: 'Frontend Lead', tech: 'ReactTs', status: 'PROD' },
    { year: '2023', name: 'BOKADRIVER', role: 'Lead', tech: 'Expressjs, Reactjs, Socketio, reddis', status: 'DEPRECATED' },
    { year: '2025-2026', name: 'Fed-Feed', role: 'Dev', tech: 'Nextjs', status: 'PROD' },
    { year: '2023', name: 'First Portfolio', role: 'Self', tech: 'Basic', status: 'ARCHIVED' },
    { year: '2025-2026', name: 'Member Portal', role: 'Lead Dev', tech: '.Net, ReactTs', status: 'PROD' },
    { year: '2025', name: 'Resumify', role: 'Sole', tech: 'AI SDK, Reactjs', status: 'PROD' },
    { year: '2026', name: 'Leg_portfolio', role: 'Sole', tech: 'ReactTs', status: 'ONLINE' },
  ];

  return (
    <div className="space-y-6 text-black">
      <h2 className="font-bold uppercase text-base underline decoration-zinc-700 mb-4">Project_History</h2>
      <div className="overflow-x-auto win95-inset">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="bg-zinc-200 border-b border-zinc-400">
            <tr>
              <th className="p-2 font-semibold border-r border-zinc-300">Year</th>
              <th className="p-2 font-semibold border-r border-zinc-300">Project</th>
              <th className="p-2 font-semibold border-r border-zinc-300">Role</th>
              <th className="p-2 font-semibold border-r border-zinc-300">Stack</th>
              <th className="p-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
                <td className="p-2 font-mono border-r border-zinc-100">{p.year}</td>
                <td className="p-2 font-bold border-r border-zinc-100">{p.name}</td>
                <td className="p-2 border-r border-zinc-100">{p.role}</td>
                <td className="p-2 border-r border-zinc-100 text-zinc-600">{p.tech}</td>
                <td className={`p-2 ${p.status === 'PROD' ? 'text-green-700 font-bold' : 'text-zinc-500'}`}>
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
