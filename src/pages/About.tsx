import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Download, Code, Database, Palette, Globe } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const { theme } = useTheme();

  const skills = [
    { name: 'JavaScript', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 90, icon: <Database className="w-5 h-5" /> },
    { name: 'React', level: 88, icon: <Palette className="w-5 h-5" /> },
    { name: 'TypeScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'CSS/SCSS', level: 92, icon: <Palette className="w-5 h-5" /> },
    { name: 'MongoDB', level: 80, icon: <Database className="w-5 h-5" /> },
  ];

  const handleDownloadResume = () => {
    // Create a mock resume file
    const resumeContent = `
JACOB OTANA
Web Developer

Email: jacob.otana@email.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/jacobotana
GitHub: github.com/jacobotana

SUMMARY
Passionate and dedicated Web Developer with a strong background in creating dynamic and user-friendly web applications. Experienced in JavaScript, Node.js, and modern frontend frameworks.

SKILLS
- JavaScript (ES6+)
- Node.js
- React.js
- TypeScript
- CSS/SCSS
- MongoDB
- Express.js
- RESTful APIs
- Git/GitHub

EXPERIENCE
Web Developer | 2020 - Present
- Developed responsive web applications using React and Node.js
- Built RESTful APIs and integrated third-party services
- Optimized application performance and user experience

EDUCATION
Bachelor's Degree in Computer Science | 2020
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jacob_Otana_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            About Me
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-slate-600'
          }`}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Content */}
          <div>
            <GlassCard className="p-8 mb-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                My Story
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-white/80' : 'text-slate-700'
              }`}>
                Hello! I'm Jacob Otana, a passionate and dedicated Web Developer with a strong background in creating dynamic and user-friendly web applications. I thrive on turning complex problems into elegant, functional solutions.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-white/80' : 'text-slate-700'
              }`}>
                My journey in web development began with a fascination for how ideas come to life on the internet. Since then, I've honed my skills in JavaScript, Node.js, and modern frontend frameworks, and I'm always eager to learn and adapt to new challenges.
              </p>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </GlassCard>
          </div>

          {/* Skills */}
          <div>
            <GlassCard className="p-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-800'
              }`}>
                Technical Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className={`mr-2 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {skill.icon}
                        </span>
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-slate-800'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'
                    }`}>
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <GlassCard className="p-8">
            <h2 className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Professional Journey
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/20'
                }`}>
                  <Globe className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>
                    Senior Web Developer
                  </h3>
                  <p className={`text-blue-500 font-medium mb-2`}>
                    2022 - Present
                  </p>
                  <p className={`${
                    theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                  }`}>
                    Leading development of complex web applications and mentoring junior developers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/20'
                }`}>
                  <Code className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>
                    Web Developer
                  </h3>
                  <p className={`text-blue-500 font-medium mb-2`}>
                    2020 - 2022
                  </p>
                  <p className={`${
                    theme === 'dark' ? 'text-white/70' : 'text-slate-600'
                  }`}>
                    Developed responsive web applications and RESTful APIs using modern technologies.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;