import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master's in Data and Analytics for Business",
      institution: "Faculty of Informatics and Statistics, Prague University of Economics and Business",
      location: "Prague, Czech Republic",
      period: "2022 - present",
      description: "Specializing in cloud computing, machine learning development, and business intelligence with focus on LLM deployment in AWS.",
      courses: [
        "Cloud Computing",
        "Python Programming",
        "Agile ML Development",
        "Cloud BI",
        "Data Architectures",
        "SSBI"
      ],
      achievements: [
        "Thesis: Deployment of LLM-based Applications in AWS (in progress)",
        "Data and Business Alumni Club member",
        "3rd place in Data Challenge 2023",
        "Scholarship for exceptional academic results"
      ]
    },
    {
      degree: "Master's in Banking and Insurance",
      institution: "Faculty of Finance and Accounting, Prague University of Economics and Business",
      location: "Prague, Czech Republic",
      period: "2020 - 2023",
      description: "Specialized in financial risk management with minor in Data Engineering, focusing on credit risk modeling applications.",
      courses: [
        "Time Series Modelling",
        "Risk Management",
        "Monetary Economics",
        "Asset Management",
        "Business Intelligence",
        "Database Systems",
        "Data Mining"
      ],
      achievements: [
        "Thesis: Application of Machine Learning Models within Credit Risk Modelling",
        "Award for excellent Master's thesis (ESOP)",
        "TOP 25 of Werner von Siemens Award",
        "2nd place at Atlas Copco Services Award",
        "Prague Banking Club member",
        "Scholarship for exceptional academic results"
      ]
    },
    {
      degree: "Master's Erasmus+ Exchange",
      institution: "Faculty of Business and Economics, University of Antwerp",
      location: "Antwerp, Belgium",
      period: "2021 - 2022",
      description: "International exchange program focusing on advanced data science and econometric methods.",
      courses: [
        "Data Science",
        "Econometrics",
        "Financial Engineering"
      ],
      achievements: [
        "AXA Data Science Challenge 2021 participant",
        "International academic experience",
        "Cross-cultural business perspective"
      ]
    },
    {
      degree: "Bachelor's in Banking and Insurance",
      institution: "Faculty of Finance and Accounting, Prague University of Economics and Business",
      location: "Prague, Czech Republic",
      period: "2017 - 2020",
      description: "Foundation in financial mathematics, statistics, and insurance principles with comprehensive business education.",
      courses: [
        "Financial Mathematics",
        "Insurance Mathematics",
        "Statistics",
        "Econometrics",
        "Financial Analysis",
        "Accounting",
        "Capital Markets",
        "Corporate Finance",
        "Banking"
      ],
      achievements: [
        "Thesis: Bank Guarantees and Documentary Letters of Credit",
        "Strong foundation in quantitative methods",
        "Financial industry knowledge base"
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey from finance fundamentals to AI specialization, 
            building expertise across multiple disciplines in Prague and Belgium.
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span className="font-semibold text-blue-600">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {edu.description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Courses</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-white text-blue-800 rounded-full text-sm border border-blue-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 