import React, { useState } from 'react';
import { BiBriefcase, BiChevronDown, BiChevronUp, BiMapPin, BiSearch } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  
  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };
  
  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'education', name: 'Education', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 1 },
    { id: 'operations', name: 'Operations', count: 1 }
  ];
  
  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'sf', name: 'San Francisco', count: 6 },
    { id: 'nyc', name: 'New York', count: 3 },
    { id: 'remote', name: 'Remote', count: 3 }
  ];
  
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco',
      type: 'Full-time',
      posted: '2 days ago',
      description: `
        <p>We're looking for a Senior Full Stack Developer to join our engineering team and help build the next generation of our learning platform.</p>
        
        <h4>Responsibilities:</h4>
        <ul>
          <li>Design, develop, and maintain web applications using React, Node.js, and MongoDB</li>
          <li>Collaborate with product managers, designers, and other engineers to deliver high-quality features</li>
          <li>Write clean, maintainable, and efficient code</li>
          <li>Participate in code reviews and mentor junior developers</li>
          <li>Troubleshoot and debug applications</li>
        </ul>
        
        <h4>Requirements:</h4>
        <ul>
          <li>5+ years of experience in full stack development</li>
          <li>Strong proficiency in JavaScript/TypeScript, React, Node.js, and MongoDB</li>
          <li>Experience with RESTful APIs and GraphQL</li>
          <li>Familiarity with CI/CD pipelines and deployment strategies</li>
          <li>Bachelor's degree in Computer Science or equivalent experience</li>
        </ul>
        
        <h4>Benefits:</h4>
        <ul>
          <li>Competitive salary and equity package</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>Flexible work arrangements</li>
          <li>Professional development budget</li>
          <li>Unlimited PTO policy</li>
        </ul>
      `
    },
    {
      id: 2,
      title: 'Curriculum Developer - Data Science',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      posted: '1 week ago',
      description: `
        <p>We're seeking a Curriculum Developer with expertise in Data Science to create engaging and effective learning materials for our data science courses.</p>
        
        <h4>Responsibilities:</h4>
        <ul>
          <li>Develop comprehensive curriculum for data science courses, including lectures, assignments, and projects</li>
          <li>Create hands-on exercises and coding challenges that reinforce learning objectives</li>
          <li>Collaborate with instructors and subject matter experts to ensure content accuracy and relevance</li>
          <li>Stay up-to-date with the latest trends and technologies in data science</li>
          <li>Gather and incorporate student feedback to improve course materials</li>
        </ul>
        
        <h4>Requirements:</h4>
        <ul>
          <li>3+ years of experience in data science or related field</li>
          <li>Strong proficiency in Python, SQL, and data analysis libraries (Pandas, NumPy, etc.)</li>
          <li>Experience with machine learning frameworks (TensorFlow, PyTorch, scikit-learn)</li>
          <li>Teaching or curriculum development experience preferred</li>
          <li>Excellent written and verbal communication skills</li>
        </ul>
        
        <h4>Benefits:</h4>
        <ul>
          <li>Competitive salary and equity package</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>Flexible work arrangements</li>
          <li>Professional development budget</li>
          <li>Unlimited PTO policy</li>
        </ul>
      `
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York',
      type: 'Full-time',
      posted: '3 days ago',
      description: `
        <p>We're looking for a Product Manager to help shape the future of our learning platform and drive product innovation.</p>
        
        <h4>Responsibilities:</h4>
        <ul>
          <li>Define product vision, strategy, and roadmap for specific areas of our platform</li>
          <li>Gather and analyze user feedback to identify pain points and opportunities</li>
          <li>Work closely with engineering, design, and education teams to deliver impactful features</li>
          <li>Define success metrics and track product performance</li>
          <li>Conduct competitive analysis and stay informed about industry trends</li>
        </ul>
        
        <h4>Requirements:</h4>
        <ul>
          <li>3+ years of product management experience, preferably in EdTech or SaaS</li>
          <li>Strong analytical and problem-solving skills</li>
          <li>Excellent communication and stakeholder management abilities</li>
          <li>Experience with agile development methodologies</li>
          <li>Bachelor's degree in a relevant field</li>
        </ul>
        
        <h4>Benefits:</h4>
        <ul>
          <li>Competitive salary and equity package</li>
          <li>Comprehensive health, dental, and vision insurance</li>
          <li>Flexible work arrangements</li>
          <li>Professional development budget</li>
          <li>Unlimited PTO policy</li>
        </ul>
      `
    }
  ];
  
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to continuously improve our platform and courses.',
      icon: <BiBriefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to user experience.',
      icon: <BiBriefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Inclusivity',
      description: 'We believe in creating an inclusive environment where diverse perspectives are valued.',
      icon: <BiBriefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Growth',
      description: 'We encourage continuous learning and professional development for all team members.',
      icon: <BiBriefcase className="h-8 w-8 text-indigo-600" />
    }
  ];
  
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Competitive salary and equity packages that reward your contributions.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents.'
    },
    {
      title: 'Flexible Work',
      description: 'Flexible work arrangements that allow you to work when and where youre most productive.'
    },
    {
      title: 'Learning Budget',
      description: 'Annual budget for professional development, courses, and conferences.'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take the time you need to rest, recharge, and pursue personal interests.'
    },
    {
      title: 'Team Events',
      description: 'Regular team events, retreats, and social activities to build connections.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Help us transform tech education and empower the next generation of developers, data scientists, and tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => setActiveTab('openings')}
              className={`py-3 px-6 rounded-md transition duration-300 ${
                activeTab === 'openings' 
                  ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                  : 'border-2 border-white text-white hover:bg-indigo-700'
              }`}
            >
              View Open Positions
            </button>
            <button 
              onClick={() => setActiveTab('culture')}
              className={`py-3 px-6 rounded-md transition duration-300 ${
                activeTab === 'culture' 
                  ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                  : 'border-2 border-white text-white hover:bg-indigo-700'
              }`}
            >
              Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === 'openings' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our team of passionate educators, engineers, and innovators who are transforming tech education.
                </p>
              </div>
              
              {/* Search and Filter */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                    <input
                      type="text"
                      placeholder="Search for positions..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <BiSearch className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Filter by:</span>
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>All Departments</option>
                      <option>Engineering</option>
                      <option>Product</option>
                      <option>Education</option>
                      <option>Marketing</option>
                      <option>Operations</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                      <option>All Locations</option>
                      <option>San Francisco</option>
                      <option>New York</option>
                      <option>Remote</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row">
                {/* Sidebar Filters */}
                <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">Departments</h3>
                    <ul className="space-y-2">
                      {departments.map(dept => (
                        <li key={dept.id}>
                          <button className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                            <span>{dept.name}</span>
                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                              {dept.count}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-4">Locations</h3>
                      <ul className="space-y-2">
                        {locations.map(location => (
                          <li key={location.id}>
                            <button className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                              <span>{location.name}</span>
                              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {location.count}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-bold mb-4">Job Type</h3>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                          <span className="ml-2 text-gray-700">Full-time</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                          <span className="ml-2 text-gray-700">Part-time</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                          <span className="ml-2 text-gray-700">Contract</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                          <span className="ml-2 text-gray-700">Internship</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Job Listings */}
                <div className="lg:w-3/4">
                  <div className="space-y-6">
                    {jobs.map(job => (
                      <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleJob(job.id)}
                          className="w-full text-left p-6 focus:outline-none"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                              <div className="flex flex-wrap items-center text-sm text-gray-600">
                                <div className="flex items-center mr-4 mb-2">
                                  <BiBriefcase className="h-4 w-4 mr-1" />
                                  <span>{job.department}</span>
                                </div>
                                <div className="flex items-center mr-4 mb-2">
                                  <BiMapPin className="h-4 w-4 mr-1" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4 mb-2">
                                  <CgLock className="h-4 w-4 mr-1" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="text-indigo-600 mb-2">
                                  Posted {job.posted}
                                </div>
                              </div>
                            </div>
                            <div>
                              {expandedJob === job.id ? (
                                <BiChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <BiChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                          </div>
                        </button>
                        
                        {expandedJob === job.id && (
                          <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                            <div 
                              className="prose max-w-none"
                              dangerouslySetInnerHTML={{ __html: job.description }}
                            />
                            <div className="mt-6">
                              <button className="btn-primary">
                                Apply Now
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
                    <button className="btn-outline">
                      Submit General Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'culture' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  At TechMonks, we're building a culture of innovation, excellence, and continuous learning.
                </p>
              </div>
              
              {/* Culture Video/Image */}
              <div className="mb-16">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="TechMonks team" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              
              {/* Our Values */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    These core principles guide everything we do at TechMonks.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Life at TechMonks */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at TechMonks</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get a glimpse of what it's like to work with us.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration" 
                    className="rounded-lg shadow-md h-64 object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Office environment" 
                    className="rounded-lg shadow-md h-64 object-cover"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team event" 
                    className="rounded-lg shadow-md h-64 object-cover"
                  />
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer competitive benefits to support your health, wellbeing, and growth.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Employee Testimonials */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Employee Testimonials</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from our team members about their experience working at TechMonks.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Employee" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">David Wilson</h4>
                        <p className="text-indigo-600">Senior Software Engineer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Working at TechMonks has been the highlight of my career. The culture of innovation and continuous learning keeps me engaged and excited about my work every day. Plus, the team is amazing!"
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Employee" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">Jennifer Rodriguez</h4>
                        <p className="text-indigo-600">Curriculum Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "I love that my work directly impacts thousands of students. The flexibility and support I receive at TechMonks allows me to do my best work while maintaining a healthy work-life balance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Explore our open positions and take the next step in your career.
          </p>
          <button 
            onClick={() => setActiveTab('openings')}
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-md transition duration-300"
          >
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;