import React from 'react';
import { Database, BarChart3, FileSpreadsheet, Code } from 'lucide-react';

function SkillsSection() {
  const skills = [
    { name: 'Excel', icon: FileSpreadsheet, color: 'text-green-600', bg: 'bg-green-50' },
    { name: 'SQL', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Power BI', icon: BarChart3, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { name: 'Python for Data Analysis', icon: Code, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-all group"
            >
              <div className={`p-4 rounded-full ${skill.bg} group-hover:scale-110 transition-transform`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <h3 className="mt-4 text-center font-semibold text-neutral-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
