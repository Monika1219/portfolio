import React from 'react';
import { Download } from 'lucide-react';

function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Resume</h2>
        <p className="text-lg text-neutral-700 mb-8">
          Download my resume to learn more about my experience and qualifications.
        </p>
        <a
          href="https://drive.google.com/file/d/12i3oBoE3rIx8BwLIG7e-vKrIa1eAMBg2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          style={{ backgroundColor: '#B4CED9' }}
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
