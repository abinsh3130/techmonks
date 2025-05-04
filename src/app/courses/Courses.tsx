import React, { useState } from 'react';
import { BiCloud, BiCode, BiSearch, BiServer, BiStar } from 'react-icons/bi';
import { BsArrowRight, BsClock, BsDatabase } from 'react-icons/bs';
import { CgSmartphone } from 'react-icons/cg';
import { CiMonitor } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa6';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Courses', count: 50 },
    { id: 'web', name: 'Web Development', count: 18, icon: <BiCode className="h-5 w-5" /> },
    { id: 'mobile', name: 'Mobile Development', count: 12, icon: <CgSmartphone className="h-5 w-5" /> },
    { id: 'data', name: 'Data Science', count: 10, icon: <BsDatabase className="h-5 w-5" /> },
    { id: 'cloud', name: 'Cloud Computing', count: 8, icon: <BiCloud className="h-5 w-5" /> },
    { id: 'devops', name: 'DevOps', count: 7, icon: <BiServer className="h-5 w-5" /> },
    { id: 'ui', name: 'UI/UX Design', count: 5, icon: <CiMonitor className="h-5 w-5" /> }
  ];
  
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development Bootcamp",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 2547,
      duration: "12 weeks",
      level: "Intermediate",
      category: "web",
      price: 999,
      featured: true
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Learn Python, data analysis, visualization, and machine learning algorithms",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "Michael Chen",
      rating: 4.8,
      students: 1893,
      duration: "10 weeks",
      level: "Advanced",
      category: "data",
      price: 1199,
      featured: true
    },
    {
      id: 3,
      title: "AWS Cloud Architecture",
      description: "Design and implement scalable, secure cloud solutions on AWS",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "Alex Rivera",
      rating: 4.7,
      students: 1245,
      duration: "8 weeks",
      level: "Intermediate",
      category: "cloud",
      price: 899,
      featured: true
    },
    {
      id: 4,
      title: "iOS App Development with Swift",
      description: "Build professional iOS applications using Swift and SwiftUI",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "Emma Wilson",
      rating: 4.9,
      students: 1567,
      duration: "10 weeks",
      level: "Intermediate",
      category: "mobile",
      price: 899,
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineering & CI/CD",
      description: "Master DevOps practices, tools, and continuous integration/deployment",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "David Miller",
      rating: 4.8,
      students: 1123,
      duration: "8 weeks",
      level: "Advanced",
      category: "devops",
      price: 999,
      featured: false
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      description: "Learn user-centered design principles and create stunning interfaces",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      instructor: "Sophia Garcia",
      rating: 4.9,
      students: 2105,
      duration: "6 weeks",
      level: "Beginner",
      category: "ui",
      price: 699,
      featured: false
    }
  ];
  
  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of tech courses designed to help you master in-demand skills and advance your career.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <BiSearch className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <FiFilter className="h-5 w-5 mr-1" />
                Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveFilter(category.id)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md transition duration-300 ${
                        activeFilter === category.id 
                          ? 'bg-indigo-100 text-indigo-600' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {category.icon && <span className="mr-2">{category.icon}</span>}
                        <span>{category.name}</span>
                      </div>
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Beginner</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Intermediate</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Advanced</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Duration</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Less than 4 weeks</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">4-8 weeks</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">8+ weeks</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Free</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Under $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">$500 - $1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">$1000+</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full mt-8 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition duration-300">
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Course Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="card group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <BsClock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{course.level}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-amber-400 mr-2">
                        <BiStar className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-gray-700">{course.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaUsers className="h-4 w-4 mr-1" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-t pt-4">
                      <div className="text-xl font-bold text-indigo-600">${course.price}</div>
                      <Link 
                        to={`/courses/${course.id}`} 
                        className="flex items-center font-medium text-indigo-600 hover:text-indigo-800"
                      >
                        View Course
                        <BsArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                <button 
                  onClick={() => setActiveFilter('all')} 
                  className="btn-primary"
                >
                  View All Courses
                </button>
              </div>
            )}
            
            {filteredCourses.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center">
                  <button className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 bg-indigo-600 text-white">
                    1
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                    3
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;