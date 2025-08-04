import React from 'react';
import { User, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced ML Engineer and AI Developer with diverse expertise across Big 4 consulting, 
            HR-tech startups, and financial services, currently working as a freelance consultant 
            specializing in GenAI and LLM integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Personal Background</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Master's in Data & Analytics for Business (in progress)</p>
                  <p className="text-gray-600">Master's in Banking & Insurance (2020-2023)</p>
                  <p className="text-gray-600">Erasmus+ Exchange at University of Antwerp</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Prague, Czech Republic</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                  <p className="text-gray-600">6+ years across finance, consulting, and AI</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Focus</h3>
                  <p className="text-gray-600">GenAI, LLM integration, risk modeling, mentoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Professional Focus</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I specialize in LLM integration and GenAI development, helping enterprises leverage 
                AI for competitive advantage. My expertise spans risk modeling, data science, 
                and cloud-native AI solutions.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I've worked across diverse industries - from Big 4 consulting (EY, PwC) to HR-tech startups, 
                building everything from credit risk models to AI-powered platforms that serve enterprise clients.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Currently working as a freelance AI consultant, leading multiple concurrent projects 
                including GenAI development at BigHub and LLM integration at LutherOne, while mentoring 
                the next generation of data scientists at Czechitas.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Key Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">3rd place Data Challenge 2023, TOP 25 Werner von Siemens Award, multiple scholarships</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Team Leadership</h3>
              <p className="text-gray-600">Led AI & ML team at LutherOne, mentored 2 junior engineers and data scientists</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Multi-domain Expertise</h3>
              <p className="text-gray-600">Big 4 consulting (EY, PwC), HR-tech startups, financial services, and AI development</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">ML Model Performance</h3>
              <p className="text-gray-600">85% accuracy attrition modeling, 80% prediction accuracy for HR analytics</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Process Optimization</h3>
              <p className="text-gray-600">Reduced manual workload by 40% through AI automation, 50% faster data processing</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Current Impact</h3>
              <p className="text-gray-600">Active contractor for 3+ clients, GenAI development, LLM integration, mentoring</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-8">
            <Heart className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Professional Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Client-Focused Solutions</h3>
                  <p className="text-gray-600">Delivering practical AI solutions that address real business challenges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="text-gray-600">Staying ahead of AI/ML trends and emerging technologies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality & Reliability</h3>
                  <p className="text-gray-600">Building robust, production-ready AI systems</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Knowledge Sharing</h3>
                  <p className="text-gray-600">Mentoring the next generation of data scientists</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cross-Industry Impact</h3>
                  <p className="text-gray-600">Applying AI expertise across diverse sectors</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Freelance Excellence</h3>
                  <p className="text-gray-600">Managing multiple concurrent projects with high quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 