import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Play, Pause, RotateCcw, Clock, Target, Zap, Download } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const ElevatorPitch: React.FC = () => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration] = React.useState(60); // 60 seconds pitch

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    } else if (currentTime >= duration) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleDownloadResume = () => {
    // Create a link to download the PDF file
    const link = document.createElement('a');
    link.href = '/Resume Otana Jacob Wilson.pdf';
    link.download = 'Jacob_Otana_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const pitchSections = [
    {
      time: "0-15s",
      title: "The Hook",
      content: "Hi, I'm Jacob Otana, a web developer who turns complex business problems into elegant digital solutions. I specialize in creating web applications that don't just look great, but actually drive results for businesses.",
      icon: <Target className="w-6 h-6" />
    },
    {
      time: "15-35s",
      title: "The Problem & Solution",
      content: "Many businesses struggle with outdated websites that don't convert visitors into customers. I build modern, responsive web applications using React and Node.js that increase user engagement by up to 40% and improve conversion rates significantly.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      time: "35-60s",
      title: "The Value & Call to Action",
      content: "In my recent project, I helped an e-commerce client increase their online sales by 60% through a complete platform redesign. I'm passionate about creating solutions that make a real impact. I'd love to discuss how I can help your business achieve similar results.",
      icon: <Play className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            My Elevator Pitch
          </h1>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-white/70' : 'text-slate-600'
          }`}>
            60 seconds to make an impression
          </p>
          
          {/* Resume Download Button */}
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 mb-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Download My Resume
          </button>
        </div>

        {/* Pitch Player */}
        <GlassCard className="p-8 mb-12">
          <div className="text-center">
            <div className={`inline-flex p-6 rounded-full mb-6 ${
              theme === 'dark' 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-blue-500/20 text-blue-600'
            }`}>
              <Clock className="w-12 h-12" />
            </div>
            
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              Interactive Pitch Timer
            </h2>
            
            <div className={`text-4xl font-mono mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            
            {/* Progress Bar */}
            <div className={`w-full rounded-full h-2 mb-6 ${
              theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'
            }`}>
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={handlePlayPause}
                className={`p-4 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } hover:shadow-lg hover:shadow-blue-500/30`}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button
                onClick={handleReset}
                className={`p-4 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-white'
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Pitch Breakdown */}
        <div className="space-y-8">
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            Pitch Breakdown
          </h2>
          
          {pitchSections.map((section, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex items-start">
                <div className={`flex-shrink-0 p-3 rounded-full mr-4 ${
                  theme === 'dark' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-500/20 text-blue-600'
                }`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className={`text-xl font-semibold mr-3 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>
                      {section.title}
                    </h3>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-white/70' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {section.time}
                    </span>
                  </div>
                  <p className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    {section.content}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Full Pitch Text */}
        <GlassCard className="p-8 mt-12">
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          }`}>
            Complete Pitch Script
          </h2>
          <div className={`text-lg leading-relaxed space-y-4 ${
            theme === 'dark' ? 'text-white/80' : 'text-slate-700'
          }`}>
            <p>
              <strong>Hi, I'm Jacob Otana,</strong> a web developer who turns complex business problems into elegant digital solutions. I specialize in creating web applications that don't just look great, but actually drive results for businesses.
            </p>
            <p>
              Many businesses struggle with outdated websites that don't convert visitors into customers. I build modern, responsive web applications using React and Node.js that increase user engagement by up to 40% and improve conversion rates significantly.
            </p>
            <p>
              In my recent project, I helped an e-commerce client increase their online sales by 60% through a complete platform redesign. I'm passionate about creating solutions that make a real impact. <strong>I'd love to discuss how I can help your business achieve similar results.</strong>
            </p>
          </div>
          
          {/* Additional Resume Download Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleDownloadResume}
              className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                theme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-blue-500/30 text-blue-700 hover:bg-blue-500/10'
              }`}
            >
              <Download className="w-5 h-5 mr-2" />
              Get My Full Resume
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ElevatorPitch;