import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, GitBranch, List } from 'lucide-react';
import mermaid from 'mermaid';

const Experience: React.FC = () => {
  const [viewMode, setViewMode] = useState<'traditional' | 'git'>('git');
  
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#3B82F6',
        primaryTextColor: '#1F2937',
        primaryBorderColor: '#2563EB',
        lineColor: '#6B7280',
        secondaryColor: '#F3F4F6',
        tertiaryColor: '#E5E7EB',
        timelineTitleColor: '#1F2937',
        timelineItemColor: '#3B82F6',
        timelineTextColor: '#1F2937'
      }
    });
  }, []);

  useEffect(() => {
    if (viewMode === 'git') {
      // Re-render mermaid when switching to timeline view
      mermaid.contentLoaded();
    }
  }, [viewMode]);
  
  const experiences = [
    {
      title: "Data Scientist | GenAI Developer",
      company: "BigHub",
      location: "Prague, Czech Republic",
      period: "May 2024 - Present",
      description: "Data Scientist and GenAI Developer helping enterprises leverage AI for data-driven competitive advantage.",
      achievements: [
        "Developing enterprise AI solutions for data-driven business transformation",
        "Implementing GenAI applications for business process optimization",
        "Consulting on AI strategy and implementation for enterprise clients",
        "Building scalable ML/AI solutions in cloud environments"
      ],
      technologies: ["Python", "GenAI", "AWS", "Machine Learning", "Data Science", "Cloud Computing"]
    },
    {
      title: "AI Engineer Consultant",
      company: "LutherOne",
      location: "Prague, Czech Republic",
      period: "July 2024 - Present",
      description: "Providing AI expertise to HR-tech B2B startup, focusing on LLM deployment and integration.",
      achievements: [
        "LLM deployment and integration into platform products",
        "AI task automation and process optimization",
        "RAG systems development and implementation",
        "AI agents development and ML team support"
      ],
      technologies: ["Python", "AWS", "AWS Bedrock", "Docker", "GitLab", "Amazon EC2", "AWS Lambda", "Terraform"]
    },
    {
      title: "Lead AI & ML Engineer",
      company: "LutherOne",
      location: "Prague, Czech Republic",
      period: "January 2024 - June 2024",
      description: "Senior lead of AI and ML team at HR-tech B2B startup, responsible for LLM integration and team mentoring.",
      achievements: [
        "Led delivery of LLM integration into core product platform",
        "Automated AI processes reducing manual workload by 40%",
        "Mentored 2 junior ML engineers and data scientists",
        "Oversaw attrition modeling development with 85% accuracy"
      ],
      technologies: ["Python", "TypeScript", "MongoDB", "AWS", "GitLab", "AWS SageMaker", "AWS Bedrock"]
    },
    {
      title: "Data Scientist",
      company: "Ernst & Young (EY)",
      location: "Prague, Czech Republic",
      period: "July 2023 - December 2023",
      description: "Advanced analytics at Big 4 consultancy, developing ML solutions for electromobility and energy sectors.",
      achievements: [
        "Developed energy consumption forecasting models",
        "Created heuristic algorithms for synthetic EV utilization generation",
        "Built interactive dashboards for client presentations",
        "Provided data-driven insights for energy sector transformation"
      ],
      technologies: ["Python", "Docker", "Streamlit", "JavaScript", "Power BI", "Machine Learning"]
    },
    {
      title: "Machine Learning Engineer",
      company: "LutherOne",
      location: "Prague, Czech Republic",
      period: "July 2023 - December 2023",
      description: "ML engineering at HR-tech startup focusing on attrition modeling and NLP applications.",
      achievements: [
        "Developed attrition modeling system with 80% prediction accuracy",
        "Implemented natural language processing for HR data analysis",
        "Built data processing pipelines reducing processing time by 50%",
        "Deployed ML models using AWS cloud infrastructure"
      ],
      technologies: ["Python", "AWS", "Docker", "AWS SageMaker", "AWS Lambda", "GitLab"]
    },
    {
      title: "Data Science & Financial Risk Modeller",
      company: "PricewaterhouseCoopers (PwC)",
      location: "Prague, Czech Republic",
      period: "March 2022 - June 2023",
      description: "Quantitative modeling at Big 4 consultancy providing credit risk modeling services.",
      achievements: [
        "Validated and back-tested credit risk models for major banks",
        "Developed statistical models for regulatory compliance",
        "Provided audit support for financial institutions",
        "Conducted ML research for risk management applications"
      ],
      technologies: ["Python", "R", "SQL", "Azure ML", "Statistical Modeling", "Risk Management"]
    }
  ];

  const TimelineView = () => {
    const timelineData = [
      { 
        period: "2018-2019", 
        roles: [
          { name: "DHL Global Forwarding", type: "full-time", color: "bg-blue-500", start: 2018.7, end: 2019.1 },
          { name: "Raiffeisenbank", type: "full-time", color: "bg-green-500", start: 2018.9, end: 2020.7 }
        ]
      },
      { 
        period: "2020-2021", 
        roles: [
          { name: "Deutsche Börse", type: "full-time", color: "bg-purple-500", start: 2020.7, end: 2022.2 },
          { name: "Erasmus+ Belgium", type: "education", color: "bg-yellow-500", start: 2021.0, end: 2022.0 }
        ]
      },
      { 
        period: "2022-2023", 
        roles: [
          { name: "PwC Risk Modeller", type: "part-time", color: "bg-red-500", start: 2022.2, end: 2023.5 },
          { name: "Česko.Digital", type: "volunteer", color: "bg-teal-500", start: 2023.3, end: 2023.7 }
        ]
      },
      { 
        period: "2023-2024", 
        roles: [
          { name: "LutherOne ML Engineer", type: "full-time", color: "bg-indigo-500", start: 2023.6, end: 2023.12 },
          { name: "EY Data Scientist", type: "part-time", color: "bg-orange-500", start: 2023.6, end: 2023.12 }
        ]
      },
      { 
        period: "2024-Present", 
        roles: [
          { name: "LutherOne Lead AI", type: "full-time", color: "bg-indigo-600", start: 2024.0, end: 2024.5 },
          { name: "BigHub GenAI Dev", type: "contractor", color: "bg-pink-500", start: 2024.4, end: 2024.12 },
          { name: "LutherOne AI Consultant", type: "contractor", color: "bg-indigo-400", start: 2024.6, end: 2024.12 },
          { name: "Czechitas Mentor", type: "contractor", color: "bg-cyan-500", start: 2024.4, end: 2024.12 }
        ]
      }
    ];

    const getYearPosition = (year: number) => {
      const startYear = 2018;
      const endYear = 2024.12;
      return ((year - startYear) / (endYear - startYear)) * 100;
    };

    const getRoleWidth = (start: number, end: number) => {
      const startYear = 2018;
      const endYear = 2024.12;
      return ((end - start) / (endYear - startYear)) * 100;
    };

    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Visual Career Timeline</h2>
          <p className="text-gray-600">
            My professional journey showing overlapping roles and career progression from 2018 to present
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
          <div className="min-w-[800px] h-80 relative">
            {/* Year markers */}
            <div className="absolute bottom-0 left-0 right-0 h-8 border-t-2 border-gray-400">
              {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
                <div
                  key={year}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: `${getYearPosition(year)}%` }}
                >
                  <div className="w-0.5 h-4 bg-gray-400 mb-1"></div>
                  <span className="text-xs font-medium text-gray-600">{year}</span>
                </div>
              ))}
            </div>

            {/* Timeline blocks */}
            <div className="absolute top-4 left-0 right-0 bottom-12">
              {timelineData.map((period, periodIndex) => (
                <div key={period.period} className="relative mb-4">
                  {period.roles.map((role, roleIndex) => {
                    const left = getYearPosition(role.start);
                    const width = getRoleWidth(role.start, role.end);
                    const top = periodIndex * 55 + roleIndex * 25;
                    
                    return (
                      <div
                        key={`${role.name}-${roleIndex}`}
                        className={`absolute ${role.color} rounded-lg shadow-md border-2 border-white transition-all hover:shadow-lg hover:scale-105`}
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          top: `${top}px`,
                          height: '20px',
                          minWidth: '80px'
                        }}
                      >
                        <div className="px-2 py-0.5 text-white text-xs font-semibold truncate">
                          {role.name}
                          <span className="ml-1 opacity-75">
                            ({role.type === 'contractor' ? '📝' : 
                              role.type === 'part-time' ? '⏰' : 
                              role.type === 'volunteer' ? '🤝' :
                              role.type === 'education' ? '🎓' : '💼'})
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Current indicator */}
            <div
              className="absolute bottom-0 w-0.5 h-full bg-red-500 opacity-70"
              style={{ left: `${getYearPosition(2024.8)}%` }}
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full">
                <div className="absolute -top-6 -left-4 text-xs font-bold text-red-600 whitespace-nowrap">
                  NOW
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
            <span>💼 Full-time</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
            <span>⏰ Part-time</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-pink-500 rounded mr-2"></div>
            <span>📝 Contractor</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-teal-500 rounded mr-2"></div>
            <span>🤝 Volunteer</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">🔄 Overlapping Roles</h3>
            <p className="text-blue-700 text-sm">Visual representation of concurrent positions and freelance flexibility</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">📈 Career Progression</h3>
            <p className="text-green-700 text-sm">From banking operations to AI leadership with clear growth trajectory</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">🎯 Current Focus</h3>
            <p className="text-purple-700 text-sm">Multiple active contractor roles in GenAI and LLM integration</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ML Engineer and AI Developer with experience across Big 4 consulting, HR-tech startups, 
            and financial services, specializing in GenAI, LLM integration, and risk modeling.
          </p>
          
          {/* View Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setViewMode('git')}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'git'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <GitBranch className="w-4 h-4 mr-2" />
                Timeline
              </button>
              <button
                onClick={() => setViewMode('traditional')}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                  viewMode === 'traditional'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Traditional
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Content Rendering */}
        {viewMode === 'git' ? (
          <TimelineView />
        ) : (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">{exp.title}</h2>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="font-semibold text-blue-600">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 mb-4 lg:mb-0">
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Programming Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Python</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">TypeScript</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">R</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">SQL</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">AI & ML Specializations</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">LLM Integration</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">GenAI Development</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Risk Modeling</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Deep Learning</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AWS</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Docker</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Terraform</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Linux/Bash</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 