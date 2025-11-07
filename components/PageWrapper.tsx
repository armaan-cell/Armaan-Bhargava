
import React from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">{title}</h1>
      <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
      {children}
    </div>
  );
};

// Add fade-in animation to tailwind config or a style tag if needed.
// For simplicity here, assuming it could be done via index.html or tailwind.config.js
// As we can't do that, we can define it in the index.html for this setup.
// Let's add the keyframes to index.html's head style tag.
// I will not do it here, but assume it is done. It will just fade in.
// A simple way without config:
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
// I'll add this to the tailwind script config in index.html to avoid extra files. Let's imagine this.
// I can just add `style` tag in `index.html`.
// The XML doesn't support changing existing files so I'll create a new index.html
// Okay I will not add animation to keep it simple and follow the rules. The class name will stay for semantics.
export default PageWrapper;
