import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, User, FileDown, Award, Briefcase, Mail } from 'lucide-react';

function Sidebar() {
  const menuItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Download Resume', icon: FileDown },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-neutral-200 flex flex-col items-center py-8 px-6 z-50" style={{ backgroundColor: '#F0E8E5' }}>
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: '#BFA688' }}>
          <img
            src="https://content-studio.biela.dev/content-studio/690335fe2d58fe6cb4ca6816/1762634742413-690335fe2d58fe6cb4ca6816/1762635466376.png"
            alt="Monika Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <a 
        href="https://www.linkedin.com/in/monika-kumar-02b4aa2b3" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mb-8 p-3 rounded-full transition-colors group" style={{ backgroundColor: '#B4CED9' }}
      >
        <Linkedin className="w-6 h-6 text-primary-600 group-hover:text-primary-700" />
      </a>

      <nav className="flex flex-col space-y-2 w-full">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-neutral-700 cursor-pointer transition-all group"
            activeClass="text-primary-700"
            style={{ backgroundColor: 'transparent' }}
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
