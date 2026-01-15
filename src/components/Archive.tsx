
import React from 'react';

export const Archive: React.FC = () => {
  const projects = [
    { year: '2024', name: 'L-Storage', role: 'Arch Lead', tech: 'C++, NVMe', status: 'PROD' },
    { year: '2023', name: 'Queue-X', role: 'Dev', tech: 'Go, gRPC', status: 'DEPRECATED' },
    { year: '2022', name: 'Metric-Viz', role: 'Dev', tech: 'TS, Rust', status: 'ARCHIVED' },
    { year: '2021', name: 'Legacy-Gate', role: 'Refactor', tech: 'Python, K8s', status: 'PROD' },
    { year: '2020', name: 'Auth-Core', role: 'Lead', tech: 'Node.js, Redis', status: 'PROD' },
    { year: '2019', name: 'Old-Blog-v1', role: 'Sole', tech: 'PHP, SQL', status: 'OFFLINE' },
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
