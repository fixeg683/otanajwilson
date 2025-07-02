import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Database, Globe, Server, Smartphone, Zap, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat Application',
      subtitle: 'Full-Stack WebSocket Implementation',
      description: 'A comprehensive real-time messaging platform built with React, Node.js, and Socket.io. Features include private messaging, group chats, file sharing, and user presence indicators.',
      longDescription: 'This project demonstrates advanced real-time communication capabilities using WebSocket technology. The application handles multiple concurrent users, message persistence, and real-time notifications. Built with a focus on scalability and performance optimization.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'Cloudinary'],
      features: [
        'Real-time messaging with Socket.io',
        'User authentication and authorization',
        'File upload and sharing capabilities',
        'Group chat functionality',
        'Message history and search',
        'Online/offline status indicators'
      ],
      challenges: [
        'Implementing efficient message broadcasting',
        'Managing WebSocket connections at scale',
        'Optimizing database queries for chat history',
        'Handling file uploads in real-time'
      ],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
      duration: '3 months',
      team: 'Solo Project',
      status: 'Completed',
      highlights: ['99.9% uptime', '500+ concurrent users', 'Sub-100ms latency']
    },
    {
      id: 2,
      title: 'E-Learning Management System',
      subtitle: 'Educational Platform with Video Streaming',
      description: 'A comprehensive learning management system with video streaming, progress tracking, quizzes, and certification features. Built for scalability with microservices architecture.',
      longDescription: 'This LMS platform serves thousands of students with interactive courses, video content delivery, and advanced analytics. The system includes instructor dashboards, student progress tracking, and automated certificate generation.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3', 'FFmpeg'],
      features: [
        'Video streaming with adaptive bitrate',
        'Interactive quiz system',
        'Progress tracking and analytics',
        'Certificate generation',
        'Multi-role user management',
        'Payment integration with Stripe'
      ],
      challenges: [
        'Optimizing video delivery for different bandwidths',
        'Implementing complex user role permissions',
        'Building scalable video processing pipeline',
        'Creating responsive video player'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
      duration: '6 months',
      team: '4 developers',
      status: 'In Production',
      highlights: ['10,000+ active users', '95% completion rate', '4.8/5 user rating']
    },
    {
      id: 3,
      title: 'AI-Powered Task Automation',
      subtitle: 'Machine Learning Integration',
      description: 'An intelligent task management system that uses machine learning to predict task priorities, suggest optimal scheduling, and automate routine workflows.',
      longDescription: 'This project combines traditional web development with AI/ML capabilities to create a smart productivity tool. The system learns from user behavior patterns to provide personalized recommendations and automate repetitive tasks.',
      technologies: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
      features: [
        'AI-powered task prioritization',
        'Smart scheduling recommendations',
        'Automated workflow triggers',
        'Natural language task creation',
        'Predictive analytics dashboard',
        'Integration with popular tools'
      ],
      challenges: [
        'Training ML models with limited data',
        'Integrating Python ML services with Node.js',
        'Optimizing model inference performance',
        'Building intuitive AI-driven UX'
      ],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
      duration: '4 months',
      team: '3 developers + 1 ML engineer',
      status: 'Beta Testing',
      highlights: ['40% productivity increase', '85% prediction accuracy', 'Patent pending']
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      subtitle: 'Decentralized Democracy Platform',
      description: 'A secure, transparent voting platform built on blockchain technology ensuring vote integrity, anonymity, and real-time result tracking.',
      longDescription: 'This innovative voting system leverages blockchain technology to create a tamper-proof, transparent democratic process. The platform ensures voter anonymity while maintaining complete auditability of the voting process.',
      technologies: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'Node.js', 'IPFS', 'MetaMask'],
      features: [
        'Blockchain-based vote storage',
        'Smart contract automation',
        'Anonymous voting mechanism',
        'Real-time result tracking',
        'Voter verification system',
        'Audit trail generation'
      ],
      challenges: [
        'Ensuring voter anonymity on public blockchain',
        'Optimizing gas costs for transactions',
        'Building user-friendly Web3 interface',
        'Implementing secure voter verification'
      ],
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Blockchain',
      duration: '5 months',
      team: '2 developers + 1 security expert',
      status: 'Pilot Testing',
      highlights: ['100% vote integrity', 'Zero fraud incidents', 'Government interest']
    },
    {
      id: 5,
      title: 'IoT Smart Home Dashboard',
      subtitle: 'Connected Device Management',
      description: 'A comprehensive IoT dashboard for managing smart home devices with real-time monitoring, automation rules, and energy consumption analytics.',
      longDescription: 'This smart home platform integrates with various IoT devices to provide centralized control and monitoring. The system includes predictive maintenance, energy optimization, and custom automation scenarios.',
      technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Raspberry Pi', 'Arduino'],
      features: [
        'Real-time device monitoring',
        'Custom automation rules',
        'Energy consumption tracking',
        'Predictive maintenance alerts',
        'Voice control integration',
        'Mobile app companion'
      ],
      challenges: [
        'Handling diverse device protocols',
        'Ensuring real-time data synchronization',
        'Building scalable IoT architecture',
        'Implementing secure device communication'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT',
      duration: '4 months',
      team: 'Solo Project',
      status: 'Personal Use',
      highlights: ['30% energy savings', '50+ connected devices', '99.5% uptime']
    },
    {
      id: 6,
      title: 'Microservices E-Commerce Platform',
      subtitle: 'Scalable Architecture Implementation',
      description: 'A modern e-commerce platform built with microservices architecture, featuring independent services for user management, inventory, payments, and notifications.',
      longDescription: 'This enterprise-grade e-commerce solution demonstrates advanced architectural patterns including microservices, event-driven design, and containerization. The platform handles high traffic loads with automatic scaling and fault tolerance.',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'RabbitMQ', 'PostgreSQL', 'Redis'],
      features: [
        'Microservices architecture',
        'Event-driven communication',
        'Auto-scaling capabilities',
        'Circuit breaker patterns',
        'Distributed caching',
        'API gateway implementation'
      ],
      challenges: [
        'Designing service boundaries',
        'Implementing distributed transactions',
        'Managing inter-service communication',
        'Ensuring data consistency across services'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Architecture',
      duration: '8 months',
      team: '6 developers',
      status: 'Production',
      highlights: ['1M+ daily requests', '99.99% availability', '50ms avg response time']
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML', 'Blockchain', 'IoT', 'Architecture'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return <Globe className="w-4 h-4" />;
      case 'AI/ML': return <Zap className="w-4 h-4" />;
      case 'Blockchain': return <Database className="w-4 h-4" />;
      case 'IoT': return <Smartphone className="w-4 h-4" />;
      case 'Architecture': return <Server className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500';
      case 'In Production': return 'text-blue-500';
      case 'Beta Testing': return 'text-yellow-500';
      case 'Pilot Testing': return 'text-orange-500';
      case 'Personal Use': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            Technical Projects
          </h1>
          <p className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-white/70' : 'text-slate-600'
          }`}>
            Deep dive into my technical expertise and problem-solving capabilities
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : theme === 'dark'
                      ? 'bg-white/10 text-white/80 hover:bg-white/20'
                      : 'bg-white/30 text-slate-700 hover:bg-white/50'
                }`}
              >
                {getCategoryIcon(category)}
                <span className="ml-2">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 text-xs rounded-full flex items-center ${
                        theme === 'dark' 
                          ? 'bg-blue-500/30 text-blue-300' 
                          : 'bg-blue-500/30 text-blue-100'
                      }`}>
                        {getCategoryIcon(project.category)}
                        <span className="ml-1">{project.category}</span>
                      </span>
                      <span className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
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
                <h3 className={`text-xl font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {project.subtitle}
                </p>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className={`flex items-center justify-center mb-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      <Calendar className="w-4 h-4 mr-1" />
                    </div>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      {project.duration}
                    </p>
                  </div>
                  <div>
                    <div className={`flex items-center justify-center mb-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      <Users className="w-4 h-4 mr-1" />
                    </div>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      {project.team}
                    </p>
                  </div>
                  <div>
                    <div className={`flex items-center justify-center mb-1 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      <Star className="w-4 h-4 mr-1" />
                    </div>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-white/60' : 'text-slate-500'
                    }`}>
                      Featured
                    </p>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
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
                  {project.technologies.length > 4 && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      theme === 'dark'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-blue-500/20 text-blue-600'
                    }`}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></div>
                      <span className={`text-xs ${
                        theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                      }`}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className={`w-full mt-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-700'
                  }`}
                >
                  {selectedProject === project.id ? 'Show Less' : 'View Details'}
                </button>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="space-y-6">
                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Project Overview
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                        }`}>
                          {project.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 mt-2 ${
                                theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                              }`}></div>
                              <span className={`text-sm ${
                                theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                              }`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Technical Challenges
                        </h4>
                        <ul className="space-y-1">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 mt-2 ${
                                theme === 'dark' ? 'bg-orange-400' : 'bg-orange-600'
                              }`}></div>
                              <span className={`text-sm ${
                                theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                              }`}>
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-sm rounded-full ${
                                theme === 'dark'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-blue-500/20 text-blue-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Skills Matrix */}
        <GlassCard className="p-8">
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            Technical Skills Matrix
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], icon: <Globe className="w-6 h-6" /> },
              { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'], icon: <Server className="w-6 h-6" /> },
              { category: 'DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'], icon: <Database className="w-6 h-6" /> },
              { category: 'Emerging Tech', skills: ['AI/ML', 'Blockchain', 'IoT', 'WebRTC'], icon: <Zap className="w-6 h-6" /> }
            ].map((skillGroup, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  {skillGroup.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-white/10 text-white/80'
                        : 'bg-slate-200/50 text-slate-700'
                    }`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Projects;