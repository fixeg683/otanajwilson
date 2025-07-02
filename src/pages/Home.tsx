import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies and frameworks'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Building fast and efficient web applications'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <div className="mb-8">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Hi, I'm <span className="text-blue-500">Jacob Otana</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 ${
                theme === 'dark' ? 'text-white/80' : 'text-slate-600'
              }`}>
                Passionate Web Developer crafting elegant digital solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 ${
                    theme === 'dark'
                      ? 'border-white/20 text-white hover:bg-white/10'
                      : 'border-blue-500/30 text-blue-700 hover:bg-blue-500/10'
                  }`}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-8 h-8 ${
            theme === 'dark' ? 'text-white/60' : 'text-slate-600'
          }`} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              What I Do
            </h2>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-white/70' : 'text-slate-600'
            }`}>
              Turning ideas into digital reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full mb-6 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Let's Build Something Amazing Together
            </h2>
            <p className={`text-lg mb-8 ${
              theme === 'dark' ? 'text-white/70' : 'text-slate-600'
            }`}>
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;