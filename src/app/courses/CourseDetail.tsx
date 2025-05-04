import React, { useState } from 'react';
import { BiAward, BiBookOpen, BiCheck, BiChevronDown, BiChevronUp, BiHeart, BiPlay, BiStar } from 'react-icons/bi';
import { CgLock, CgShoppingCart } from 'react-icons/cg';
import { CiShare2 } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  
  // Mock course data - in a real app, you would fetch this based on the ID
  const course = {
    id: parseInt(id || '1'),
    title: "Full Stack Web Development Bootcamp",
    description: "Master modern web development with React, Node.js, and MongoDB. This comprehensive bootcamp will take you from beginner to job-ready developer with hands-on projects and real-world applications.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah has over 10 years of experience in web development and has worked at companies like Google and Amazon. She specializes in React and Node.js development."
    },
    rating: 4.9,
    reviews: 347,
    students: 2547,
    duration: "12 weeks",
    level: "Intermediate",
    category: "Web Development",
    lastUpdated: "June 2025",
    language: "English",
    price: 999,
    discountPrice: 799,
    features: [
      "Lifetime access to 120+ lessons",
      "15 real-world projects",
      "1-on-1 mentorship sessions",
      "Career coaching and resume review",
      "Certificate of completion",
      "Access to student community"
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "10:15", free: true },
          { title: "Setting Up Your Development Environment", duration: "15:30", free: true },
          { title: "HTML Fundamentals", duration: "45:20", free: false },
          { title: "CSS Basics", duration: "50:15", free: false }
        ]
      },
      {
        title: "JavaScript Essentials",
        lessons: [
          { title: "JavaScript Syntax and Variables", duration: "35:45", free: false },
          { title: "Functions and Scope", duration: "40:20", free: false },
          { title: "Arrays and Objects", duration: "55:10", free: false },
          { title: "DOM Manipulation", duration: "60:30", free: false }
        ]
      },
      {
        title: "React Frontend Development",
        lessons: [
          { title: "React Fundamentals", duration: "65:15", free: false },
          { title: "Components and Props", duration: "45:30", free: false },
          { title: "State and Lifecycle", duration: "50:45", free: false },
          { title: "Hooks and Context API", duration: "70:20", free: false }
        ]
      },
      {
        title: "Node.js Backend Development",
        lessons: [
          { title: "Node.js Basics", duration: "40:15", free: false },
          { title: "Express.js Framework", duration: "55:30", free: false },
          { title: "RESTful API Design", duration: "60:45", free: false },
          { title: "Authentication and Authorization", duration: "75:20", free: false }
        ]
      },
      {
        title: "Database Integration",
        lessons: [
          { title: "MongoDB Fundamentals", duration: "50:15", free: false },
          { title: "Mongoose ODM", duration: "45:30", free: false },
          { title: "CRUD Operations", duration: "65:45", free: false },
          { title: "Data Relationships", duration: "55:20", free: false }
        ]
      },
      {
        title: "Full Stack Projects",
        lessons: [
          { title: "Project Planning and Setup", duration: "30:15", free: false },
          { title: "Building the Backend", duration: "85:30", free: false },
          { title: "Developing the Frontend", duration: "90:45", free: false },
          { title: "Deployment and CI/CD", duration: "60:20", free: false }
        ]
      }
    ]
  };
  
  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  // Calculate total course duration
  const totalLessons = course.curriculum.reduce((total, section) => total + section.lessons.length, 0);
  const totalHours = course.curriculum.reduce((total, section) => {
    return total + section.lessons.reduce((sectionTotal, lesson) => {
      const [minutes, seconds] = lesson.duration.split(':').map(Number);
      return sectionTotal + (minutes + seconds / 60) / 60;
    }, 0);
  }, 0);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8">
              <div className="flex items-center text-indigo-200 mb-4">
                <span>{course.category}</span>
                <span className="mx-2">•</span>
                <span>{course.level}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-indigo-100 mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{course.rating}</span>
                  <span className="ml-1 text-indigo-200">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <FaUsers className="h-5 w-5 text-indigo-200" />
                  <span className="ml-1">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center mb-2">
                  <CgLock className="h-5 w-5 text-indigo-200" />
                  <span className="ml-1">{Math.floor(totalHours)} hours ({totalLessons} lessons)</span>
                </div>
              </div>
              <div className="flex items-center">
                <img 
                  src={course.instructor.image} 
                  alt={course.instructor.name} 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Created by {course.instructor.name}</p>
                  <p className="text-indigo-200 text-sm">Last updated: {course.lastUpdated}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6 text-gray-900">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-indigo-600">${course.discountPrice}</div>
                    <div className="text-lg text-gray-500 line-through">${course.price}</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">20% discount! Offer ends in 2 days</div>
                </div>
                <button className="w-full btn-primary mb-3 flex items-center justify-center">
                  <CgShoppingCart className="h-5 w-5 mr-2" />
                  Enroll Now
                </button>
                <button className="w-full btn-outline mb-6">Try Free Preview</button>
                <div className="text-sm text-gray-600 mb-4">
                  This course includes:
                </div>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center space-x-4 pt-4 border-t">
                  <button className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <CiShare2 className="h-5 w-5 mr-1" />
                    Share
                  </button>
                  <button className="text-gray-600 hover:text-indigo-600 flex items-center">
                    <BiHeart className="h-5 w-5 mr-1" />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'curriculum'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'instructor'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Instructor
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Build full-stack web applications from scratch</span>
                  </div>
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Create responsive, modern UIs with React</span>
                  </div>
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Develop RESTful APIs with Node.js and Express</span>
                  </div>
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Design and implement MongoDB databases</span>
                  </div>
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Implement authentication and authorization</span>
                  </div>
                  <div className="flex items-start">
                    <BiCheck className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span>Deploy applications to production environments</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                <div className="prose max-w-none mb-8">
                  <p className="mb-4">
                    This comprehensive bootcamp is designed to take you from beginner to job-ready full stack developer. Whether you're starting from scratch or looking to upgrade your skills, this course provides everything you need to build modern web applications.
                  </p>
                  <p className="mb-4">
                    You'll start with the fundamentals of web development, learning HTML, CSS, and JavaScript. Then, you'll dive into modern frontend development with React, building interactive and responsive user interfaces. On the backend, you'll master Node.js and Express to create robust APIs and server-side applications.
                  </p>
                  <p className="mb-4">
                    Throughout the course, you'll work on real-world projects that you can add to your portfolio. You'll build a social media application, an e-commerce platform, and a content management system, applying the skills you learn in practical scenarios.
                  </p>
                  <p>
                    By the end of this bootcamp, you'll have the skills and confidence to apply for full stack developer positions or build your own web applications from scratch.
                  </p>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 mb-8 space-y-2">
                  <li>Basic computer skills and familiarity with using the internet</li>
                  <li>No prior programming experience required - we'll start from the basics</li>
                  <li>A computer with internet access (Windows, Mac, or Linux)</li>
                  <li>Enthusiasm and willingness to practice what you learn</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4">Who This Course is For</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Beginners who want to learn web development from scratch</li>
                  <li>Frontend developers looking to expand their skills to include backend development</li>
                  <li>Backend developers wanting to learn modern frontend frameworks</li>
                  <li>Anyone looking to build full-stack web applications</li>
                  <li>Career changers looking to enter the tech industry</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Course Content</h2>
                  <div className="text-sm text-gray-600">
                    {course.curriculum.length} sections • {totalLessons} lectures • {Math.floor(totalHours)} hours total
                  </div>
                </div>
                
                <div className="mb-6">
                  <button className="text-indigo-600 font-medium text-sm hover:underline">
                    Expand All Sections
                  </button>
                </div>
                
                <div className="space-y-4">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          {expandedSections.includes(sectionIndex) ? (
                            <BiChevronUp className="h-5 w-5 text-gray-500 mr-2" />
                          ) : (
                            <BiChevronDown className="h-5 w-5 text-gray-500 mr-2" />
                          )}
                          <span className="font-medium">{section.title}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {section.lessons.length} lectures
                        </div>
                      </button>
                      
                      {expandedSections.includes(sectionIndex) && (
                        <div className="divide-y divide-gray-200">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 flex justify-between items-center hover:bg-gray-50">
                              <div className="flex items-center">
                                <BiPlay className="h-4 w-4 text-gray-500 mr-3" />
                                <span>{lesson.title}</span>
                                {lesson.free && (
                                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                    Free Preview
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{lesson.duration}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div>
                <div className="flex items-start mb-8">
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name} 
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                    <p className="text-gray-600 mb-4">{course.instructor.title} at {course.instructor.company}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1">4.9 Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <BiAward className="h-5 w-5 text-indigo-600 mr-1" />
                        <span>15 Courses</span>
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="h-5 w-5 text-indigo-600 mr-1" />
                        <span>12,000+ Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="mb-4">
                    {course.instructor.bio}
                  </p>
                  <p className="mb-4">
                    Throughout her career, Sarah has led development teams on projects for Fortune 500 companies and startups alike. She's passionate about teaching and has mentored dozens of junior developers who have gone on to successful careers in tech.
                  </p>
                  <p>
                    Sarah's teaching philosophy focuses on practical, hands-on learning. She believes that the best way to learn programming is by building real projects and solving real problems. Her courses are designed to give you the skills you need to succeed in the industry, with a focus on best practices and current technologies.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex flex-col md:flex-row items-start mb-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-indigo-600 mb-2">{course.rating}</div>
                      <div className="flex justify-center mb-2">
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                        <BiStar className="h-5 w-5 text-yellow-400 fill-current" />
                      </div>
                      <div className="text-gray-600">Course Rating</div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">5 stars</div>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <div className="w-12 text-sm text-gray-600 text-right">85%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">4 stars</div>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '10%' }}></div>
                        </div>
                        <div className="w-12 text-sm text-gray-600 text-right">10%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">3 stars</div>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '3%' }}></div>
                        </div>
                        <div className="w-12 text-sm text-gray-600 text-right">3%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">2 stars</div>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
                        </div>
                        <div className="w-12 text-sm text-gray-600 text-right">1%</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">1 star</div>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full" style={{ width: '1%' }}></div>
                        </div>
                        <div className="w-12 text-sm text-gray-600 text-right">1%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Student Reviews</h3>
                  
                  <div className="space-y-6">
                    {/* Sample reviews */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start">
                        <img 
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-bold mr-2">Michael Thompson</h4>
                            <div className="text-sm text-gray-500">2 weeks ago</div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                          </div>
                          <p className="text-gray-700">
                            This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand, and the projects are challenging but doable. I've learned so much and feel confident in my abilities now.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-start">
                        <img 
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-bold mr-2">Jennifer Wilson</h4>
                            <div className="text-sm text-gray-500">1 month ago</div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                          </div>
                          <p className="text-gray-700">
                            I came into this course with some basic HTML and CSS knowledge, but no JavaScript experience. The course was perfectly paced and I never felt lost. The instructor is responsive to questions and the community is supportive. I've already landed my first freelance gig thanks to what I learned!
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start">
                        <img 
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-bold mr-2">David Rodriguez</h4>
                            <div className="text-sm text-gray-500">2 months ago</div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                            <BiStar className="h-4 w-4 fill-current" />
                          </div>
                          <p className="text-gray-700">
                            This bootcamp is the real deal. I tried several other courses before this one, but none of them provided the depth and breadth of knowledge that this one does. The projects are realistic and the instructor explains not just how to code, but why certain approaches are better than others. Highly recommended for anyone serious about becoming a full stack developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="btn-outline">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <h3 className="text-lg font-bold mb-4">This Course Includes</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <BiPlay className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>{Math.floor(totalHours)} hours on-demand video</span>
                </li>
                <li className="flex items-center">
                  <BiBookOpen className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Comprehensive course materials</span>
                </li>
                <li className="flex items-center">
                  <BiAward className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Access to student community</span>
                </li>
                <li className="flex items-center">
                  <CgLock className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Lifetime access</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold mb-4">Skills You'll Gain</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">HTML</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">CSS</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">React</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Express</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">MongoDB</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">RESTful APIs</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Authentication</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;