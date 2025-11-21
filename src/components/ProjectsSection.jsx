import React from 'react';
import { ExternalLink } from 'lucide-react';

function ProjectsSection() {
  const projects = [
    {
      title: 'Shoplinx',
      description: 'Data-driven analysis of Shoplinx\'s international sales and operations to design a hybrid expansion strategy for the Canadian market.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762721426369.png',
      tags: ['TOS', 'SSMS', 'Power BI'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_about-the-dataset-the-dataset-includes-sales-activity-7279246439912812545-vi9n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
    {
      title: 'Restaurant Order Analysis',
      description: 'SQL-powered analysis of restaurant orders to evaluate customer reactions and optimise a newly introduced menu.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762721567705.png',
      tags: ['SQL'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_sql-restaurant-order-analysis-project-conducted-activity-7287442578025660419-zZMs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
    {
      title: 'Supply Chain Analysis',
      description: 'Interactive Power BI dashboard delivering supply chain insights on revenue, costs, and customer trends.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762721687151.png',
      tags: ['Power BI'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_excited-to-share-my-latest-project-using-activity-7287830686244220932-PxaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
    {
      title: 'Flight Analysis',
      description: 'Power BI dashboard analysing flight operations to reveal delays, cancellations, and performance trends.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762721839404.png',
      tags: ['Power BI'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_thrilled-to-share-my-latest-project-in-power-activity-7287959373954379778-dQVN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
    {
      title: 'Second Hand Car Dealer',
      description: 'SQL analysis of 7,927 car records uncovering yearly trends, fuel type popularity, and distribution patterns.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762721951265.png',
      tags: ['SQL'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_excited-to-share-my-latest-sql-project-activity-7288322228289429504-riFm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
    {
      title: 'Healthcare Analytics',
      description: 'Power BI dashboard analysing healthcare data to uncover bottlenecks and improve patient care efficiency.',
      image: 'https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762722051566.png',
      tags: ['SQL'],
      link: 'https://www.linkedin.com/posts/monika-kumar-02b4aa2b3_excited-to-share-my-latest-power-bi-project-activity-7287597044796436480-mzCg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtbjaMBbYttWnlCXn9dCyIgmk6LFPHCDrE',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-neutral-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-neutral-900 mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-white rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#B4CED9' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
