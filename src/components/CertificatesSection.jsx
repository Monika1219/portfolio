import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

function CertificatesSection() {
  const certificates = [
    { 
      name: 'NCFE Level 4 Diploma Data Analyst', 
      issuer: 'NCFE', 
      year: '17 October 2025',
      link: 'https://drive.google.com/file/d/1QjB-MDDl2--2DcAG9RGbljb07XjLvMXu/view?usp=drive_link'
    },
    { 
      name: 'NCFE Level 3 Certificate in Data', 
      issuer: 'NCFE', 
      year: '06 March 2025',
      link: 'https://drive.google.com/file/d/1GGp8YAAFYyJalKyBhD8iy6FOnPpuH7l-/view?usp=drive_link'
    },
    { 
      name: 'Data Analysis Practical Training', 
      issuer: 'Future Connect Training Institute', 
      year: '26 February 2025',
      link: 'https://drive.google.com/file/d/1EdJcxb6VYNbsMwDBfVwKMy1fk0YWmHpu/view?usp=drive_link'
    },
    { 
      name: 'Cyber Infrastructure Technician', 
      issuer: 'iMeta Training', 
      year: '28 March 2024',
      link: 'https://drive.google.com/file/d/1_WKuUKZEJ4TlbVeFAyBcSHNLpw9tWRKn/view?usp=drive_link'
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all bg-neutral-50 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#B4CED9' }}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neutral-900">{cert.name}</h3>
                  <p className="text-neutral-600 mt-1">{cert.issuer}</p>
                  <p className="text-sm text-neutral-500 mt-1">{cert.year}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm font-medium hover:text-primary-600 transition-colors" style={{ color: '#B4CED9' }}>
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
