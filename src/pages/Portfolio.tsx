import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.',
      technologies: ['React', 'JavaScript', 'Chart.js', 'OpenWeather API'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user authentication, post management, real-time messaging, and file uploads.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Backend'
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online reservation system, menu management, and customer reviews integration.',
      technologies: ['React', 'CSS3', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend'
    },
    {
      title: 'Blog Platform',
      description: 'A content management system with markdown editor, SEO optimization, and multi-user support for content creators.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Markdown'],
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Web App'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            My Portfolio
          </h1>
          <p className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-white/70' : 'text-slate-600'
          }`}>
            A showcase of my recent projects and accomplishments
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : theme === 'dark'
                      ? 'bg-white/10 text-white/80 hover:bg-white/20'
                      : 'bg-white/30 text-slate-700 hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    theme === 'dark' 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-500/20 text-blue-600'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-full ${
                        theme === 'dark'
                          ? 'bg-white/10 text-white/80'
                          : 'bg-slate-200/50 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <GlassCard className="p-8">
            <h2 className={`text-3xl font-bold text-center mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Technical Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Frontend Development
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  React, TypeScript, HTML5, CSS3, Tailwind CSS, JavaScript ES6+
                </p>
              </div>
              
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  <Database className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Backend Development
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, GraphQL
                </p>
              </div>
              
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  Tools & Deployment
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  Git, Docker, AWS, Vercel, Netlify, Jest, Webpack, Vite
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;