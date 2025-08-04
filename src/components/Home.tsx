import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, TrendingUp, Code, BarChart3, GraduationCap, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Database className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Petr Nguyen
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">
              ML Engineer | AI Developer | Data Scientist
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experienced ML Engineer and AI Developer with expertise across Big 4 consulting, 
              HR-tech startups, and financial services. Specializing in GenAI, LLM integration, 
              risk modeling, and data-driven solutions in Prague, Czech Republic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/experience"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Experience
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Competencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">GenAI & LLM</h3>
              </div>
              <p className="text-gray-600">
                LLM integration, GenAI development, RAG systems, AI agents, 
                and AWS Bedrock deployment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Risk Modeling</h3>
              </div>
              <p className="text-gray-600">
                Credit risk modeling, statistical validation, model back-testing, 
                and regulatory compliance for financial institutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">ML Engineering</h3>
              </div>
              <p className="text-gray-600">
                Attrition modeling, NLP, data pipelines, model deployment, 
                and MLOps in production environments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Programming</h3>
              </div>
              <p className="text-gray-600">
                Python, TypeScript, R, SQL, Docker, Linux/Bash, 
                and cloud-native development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-600">
                AWS (EC2, Lambda, SageMaker, Bedrock), Terraform, 
                CI/CD, and serverless deployment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-blue-100">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Consulting</h3>
              </div>
              <p className="text-gray-600">
                Big 4 consulting experience (EY, PwC), startup AI strategy, 
                and cross-industry domain expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-200">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-200">Master's Degrees</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Big 4</div>
              <div className="text-blue-200">Consulting Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Journey</h2>
            <p className="text-xl text-gray-600">From banking operations to AI leadership - my professional evolution</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Experience Timeline</h3>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[1000px] h-96 relative group">
                {(() => {
                  const currentDate = new Date();
                  const currentYear = currentDate.getFullYear();
                  const currentMonth = currentDate.getMonth() + 1;
                  const currentYearDecimal = currentYear + (currentMonth / 12);
                  const startYear = 2018;
                  const endYear = currentYear + 2; // Always extend 2 years beyond current year
                  const totalYears = endYear - startYear;
                  
                  const getPosition = (year: number) => ((year - startYear) / totalYears) * 100;
                  const getRoleWidth = (start: number, end: number) => ((end - start) / totalYears) * 100;
                  
                  const years = [];
                  for (let year = startYear; year <= endYear; year++) {
                    years.push(year);
                  }

                  const roles = [
                    { name: "BigHub", subTitle: "GenAI Developer", type: "📝", color: "bg-blue-600", start: 2024.4, end: currentYearDecimal, fullName: "BigHub - GenAI Developer (Contractor)", description: "Enterprise AI solutions and GenAI development" },
                    { name: "LutherOne", subTitle: "AI Consultant", type: "📝", color: "bg-indigo-500", start: 2024.6, end: currentYearDecimal, fullName: "LutherOne - AI Engineer Consultant", description: "LLM integration, RAG systems, AI agents" },
                    { name: "Czechitas", subTitle: "Data Science Mentor", type: "📝", color: "bg-cyan-500", start: 2024.4, end: currentYearDecimal, fullName: "Czechitas - Data Science Mentor", description: "Mentoring next generation of data scientists" },
                    { name: "LutherOne", subTitle: "Lead AI Engineer", type: "💼", color: "bg-indigo-600", start: 2024.0, end: 2024.5, fullName: "LutherOne - Lead AI & ML Engineer", description: "Led AI team, LLM integration, mentored 2 engineers" },
                    { name: "EY", subTitle: "Data Scientist", type: "⏰", color: "bg-orange-500", start: 2023.6, end: 2023.12, fullName: "Ernst & Young - Data Scientist (Part-time)", description: "Energy sector ML, electromobility analytics" },
                    { name: "LutherOne", subTitle: "ML Engineer", type: "💼", color: "bg-indigo-400", start: 2023.6, end: 2023.12, fullName: "LutherOne - Machine Learning Engineer", description: "Attrition modeling, NLP, data pipelines" },
                    { name: "PwC", subTitle: "Risk Modeller", type: "⏰", color: "bg-red-500", start: 2022.2, end: 2023.5, fullName: "PwC - Data Science & Financial Risk Modeller", description: "Credit risk modeling, statistical validation" },
                    { name: "Deutsche Börse", subTitle: "Financial Analyst", type: "💼", color: "bg-purple-500", start: 2020.7, end: 2022.2, fullName: "Deutsche Börse - Financial Analyst", description: "Financial analysis and market operations" },
                    { name: "Banking", subTitle: "Operations", type: "💼", color: "bg-green-500", start: 2018.8, end: 2020.7, fullName: "Raiffeisenbank - Bank Guarantees Assistant", description: "Bank guarantees and banking operations" }
                  ];

                  return (
                    <>
                      {/* Year markers */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 border-t-2 border-blue-300">
                        {years.map((year) => (
                          <div
                            key={year}
                            className="absolute transform -translate-x-1/2"
                            style={{ left: `${getPosition(year)}%` }}
                          >
                            <div className="w-0.5 h-4 bg-blue-400 mb-1"></div>
                            <span className="text-xs font-medium text-gray-600">{year}</span>
                          </div>
                        ))}
                      </div>

                      {/* Experience blocks */}
                      <div className="absolute top-4 left-0 right-0 bottom-12">
                        {roles.map((role, index) => {
                          const left = getPosition(role.start);
                          const width = getRoleWidth(role.start, role.end);
                          const top = 10 + (index * 35); // Increased spacing
                          const isActive = role.end >= currentYearDecimal - 0.1; // Active if ending within last month
                          
                          return (
                            <div
                              key={`${role.name}-${index}`}
                              className={`absolute ${role.color} rounded-lg shadow-md border-2 border-white transition-all duration-300 cursor-pointer group/item hover:shadow-xl hover:scale-110 hover:z-30 ${isActive ? 'ring-2 ring-yellow-400 ring-opacity-60' : ''}`}
                              style={{
                                left: `${left}%`,
                                width: `${Math.max(width, 12)}%`,
                                top: `${top}px`,
                                height: '32px', // Increased height
                                minWidth: '100px' // Increased minimum width
                              }}
                            >
                              {/* Main content */}
                              <div className="px-3 py-1 text-white h-full flex flex-col justify-center">
                                <div className="text-xs font-bold leading-tight">
                                  {role.name} {role.type}
                                </div>
                                <div className="text-xs opacity-90 leading-tight truncate">
                                  {role.subTitle}
                                </div>
                              </div>
                              
                              {/* Enhanced tooltip on hover */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover/item:opacity-100 transition-all duration-300 whitespace-nowrap z-40 pointer-events-none shadow-xl border border-gray-700">
                                <div className="font-bold text-blue-300 mb-1">{role.fullName}</div>
                                <div className="text-xs text-gray-300 mb-2">{role.description}</div>
                                <div className="text-xs text-yellow-300">
                                  {new Date(role.start * 12 - 12 + 2018 * 12).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                                  {role.end >= currentYearDecimal - 0.1 ? ' Present' : new Date(role.end * 12 - 12 + 2018 * 12).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </div>
                                
                                {/* Tooltip arrow */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                              </div>
                              
                              {/* Active indicator */}
                              {isActive && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-md">
                                  <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Current indicator */}
                      <div
                        className="absolute bottom-0 w-1 h-full bg-gradient-to-t from-red-500 to-red-400 opacity-80 z-20 shadow-lg"
                        style={{ left: `${getPosition(currentYearDecimal)}%` }}
                      >
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg border-2 border-white">
                          <div className="absolute inset-1 bg-red-400 rounded-full animate-ping"></div>
                          <div className="absolute -top-10 -left-8 text-xs font-bold text-red-600 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md border">
                            NOW ({currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })})
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
            
            {/* Interactive Legend */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-white rounded-lg p-4 border border-blue-100">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                  <span className="text-gray-600">💼 Full-time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                  <span className="text-gray-600">⏰ Part-time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-500 rounded mr-2"></div>
                  <span className="text-gray-600">📝 Contractor</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 animate-pulse ring-2 ring-yellow-400 ring-opacity-60"></div>
                  <span className="text-gray-600">⚡ Active role</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-4 bg-gradient-to-t from-red-500 to-red-400 mr-2"></div>
                  <span className="text-gray-600">📍 Current time</span>
                </div>
                <div className="text-blue-600 font-medium">
                  💡 Hover for details • Timeline extends to {new Date().getFullYear() + 2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Journey</h2>
            <p className="text-xl text-gray-600">Building expertise from finance fundamentals to AI specialization</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Academic Timeline</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 font-bold text-sm mb-2">2017-2020</div>
                <h4 className="font-semibold text-gray-900 mb-2">Bachelor's Degree</h4>
                <p className="text-sm text-gray-600 mb-2">Banking & Insurance</p>
                <p className="text-xs text-blue-600">Prague University of Economics</p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
                <span className="text-xs text-green-600 font-medium">Completed ✓</span>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 font-bold text-sm mb-2">2020-2023</div>
                <h4 className="font-semibold text-gray-900 mb-2">Master's #1</h4>
                <p className="text-sm text-gray-600 mb-2">Banking & Insurance</p>
                <p className="text-xs text-blue-600">Prague University of Economics</p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
                <span className="text-xs text-green-600 font-medium">Completed ✓</span>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 font-bold text-sm mb-2">2021-2022</div>
                <h4 className="font-semibold text-gray-900 mb-2">Erasmus+</h4>
                <p className="text-sm text-gray-600 mb-2">Data Science Focus</p>
                <p className="text-xs text-blue-600">University of Antwerp</p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
                <span className="text-xs text-green-600 font-medium">Completed ✓</span>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow relative">
                <div className="text-blue-600 font-bold text-sm mb-2">
                  2022-{new Date().getFullYear() + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Master's #2</h4>
                <p className="text-sm text-gray-600 mb-2">Data & Analytics for Business</p>
                <p className="text-xs text-blue-600">Prague University of Economics</p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-orange-500 h-1 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${Math.min(((new Date().getFullYear() - 2022 + (new Date().getMonth() + 1) / 12) / 3) * 100, 90)}%` 
                    }}
                  ></div>
                </div>
                <span className="text-xs text-orange-600 font-medium">In Progress...</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 