import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-900 mb-8">About Me</h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          I'm a data analyst with a passion for transforming raw data into meaningful insights. 
          I specialise in data visualisation, reporting, and storytelling using tools like Power BI, 
          Excel, SQL, and Python. With a strong foundation in data cleaning, dashboard creation, and 
          stakeholder communication, I help organisations make data-driven decisions with clarity and confidence.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
