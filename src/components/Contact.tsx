
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [callForm, setCallForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: '',
    topic: ''
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = emailForm;
    const mailtoLink = `mailto:shahzaibzakori@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, preferredTime, topic } = callForm;
    const mailtoLink = `mailto:shahzaibzakori@gmail.com?subject=${encodeURIComponent('One-to-One Call Request')}&body=${encodeURIComponent(
      `One-to-One Call Request\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Time: ${preferredTime}\nTopic: ${topic}\n\nPlease confirm availability for a one-to-one call.`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="space-y-8 max-w-2xl text-black">
      <h2 className="font-bold uppercase text-base underline decoration-zinc-700">Communication_Protocols</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Email Form */}
        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Direct_Email_Transmission</h3>
          <div className="win95-inset p-4 bg-white">
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Your_Name:</label>
                <input
                  type="text"
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({...emailForm, name: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Your_Email:</label>
                <input
                  type="email"
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Subject:</label>
                <input
                  type="text"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Message:</label>
                <textarea
                  value={emailForm.message}
                  onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white h-20 resize-none"
                  required
                />
              </div>
              <button type="submit" className="win95-button px-4 py-1 font-bold">
                📧 Send_Email
              </button>
            </form>
          </div>
        </section>

        {/* Book One-to-One Call */}
        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Book_One-to-One_Call</h3>
          <div className="win95-inset p-4 bg-white">
            <form onSubmit={handleCallSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold mb-1">Your_Name:</label>
                <input
                  type="text"
                  value={callForm.name}
                  onChange={(e) => setCallForm({...callForm, name: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Your_Email:</label>
                <input
                  type="email"
                  value={callForm.email}
                  onChange={(e) => setCallForm({...callForm, email: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Phone_Number:</label>
                <input
                  type="tel"
                  value={callForm.phone}
                  onChange={(e) => setCallForm({...callForm, phone: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Preferred_Time:</label>
                <select
                  value={callForm.preferredTime}
                  onChange={(e) => setCallForm({...callForm, preferredTime: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                  <option value="Afternoon (12PM-5PM)">Afternoon (12PM-5PM)</option>
                  <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">Discussion_Topic:</label>
                <input
                  type="text"
                  value={callForm.topic}
                  onChange={(e) => setCallForm({...callForm, topic: e.target.value})}
                  className="win95-inset w-full p-2 text-xs bg-white"
                  placeholder="e.g., Technical Architecture, Career Advice"
                  required
                />
              </div>
              <button type="submit" className="win95-button px-4 py-1 font-bold">
                📞 Book_Call
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Primary_Link</h3>
          <div className="win95-inset p-4 font-bold text-lg bg-white">
            <a href="mailto:shahzaibzakori@gmail.com" className="text-blue-700 underline">
              MY_EMAIL_ADDRESS
            </a>
          </div>
        </section>

        <section>
          <h3 className="text-zinc-500 text-[10px] uppercase mb-2">Social_Networks</h3>
          <ul className="space-y-2 text-sm win95-inset p-4 bg-white">
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">🐙 GitHub</span>
              <a href="https://github.com/shahzaibZakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">shahzaibZakori</a>
            </li>
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">💼 LinkedIn</span>
              <a href="https://linkedin.com/in/shahzaibzakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">shahzaibzakori</a>
            </li>
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">📷 Instagram</span>
              <a href="https://instagram.com/shahzaibzakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">@shahzaibzakori</a>
            </li>
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">🎵 TikTok</span>
              <a href="https://tiktok.com/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">@shahzaibzakori</a>
            </li>
            <li className="flex justify-between border-b border-zinc-100 pb-2">
              <span className="text-zinc-600">🧵 Threads</span>
              <a href="https://threads.net/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">@shahzaibzakori</a>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-zinc-600">📺 YouTube</span>
              <a href="https://youtube.com/@shahzaibzakori" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">@shahzaibzakori</a>
            </li>
          </ul>
        </section>
      </div>

      <section className="bg-zinc-50 p-4 text-xs text-zinc-600 border-l-4 border-zinc-400">
        <p>
          I am available for deep technical discussions, architecture reviews, and high-impact engineering roles.
          I do not respond to generic recruiter spam or "hype-based" opportunities.
          Please provide technical context in your first outreach.
        </p>
      </section>
    </div>
  );
};
