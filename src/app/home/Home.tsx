import React from 'react';
import { BiChevronRight, BiStar } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Development Course",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      rating: 4.8,
      students: 1234,
      duration: "6 months",
      instructor: {
        name: "John Smith",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      }
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      rating: 4.9,
      students: 987,
      duration: "4 months",
      instructor: {
        name: "Sarah Johnson",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
      }
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      rating: 4.7,
      students: 756,
      duration: "5 months",
      instructor: {
        name: "Mike Wilson",
        image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      }
    },
    {
      id: 4,
      title: "Mobile App Development",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      rating: 4.6,
      students: 543,
      duration: "6 months",
      instructor: {
        name: "Emily Brown",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
      }
    }
  ];

  const instructors = [
    {
      name: "John Smith",
      role: "Full Stack Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 4.8
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 4.9
    },
    {
      name: "Mike Wilson",
      role: "Data Scientist",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      rating: 4.7
    }
  ];

  const partners = [
    { name: "Google", logo: "/google.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Amazon", logo: "/amazon.png" },
    { name: "Meta", logo: "/meta.png" },
    { name: "Apple", logo: "/apple.png" }
  ];

  return (
    <div className="bg-[#F8F9FF]">
      {/* Hero Section */}
      <section className="bg-[#2D2F6D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Certified Full Stack Development Course
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Master the art of full stack development with our comprehensive course. Learn from industry experts and build real-world projects.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Start Learning
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#2D2F6D] font-medium py-3 px-6 rounded-md transition duration-300">
                  View Courses
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" 
                alt="Hero" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D2F6D] mb-8">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-gray-600 text-sm">{course.instructor.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <BiStar className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="h-4 w-4 mr-1" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <BsClock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D2F6D] mb-8">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{instructor.name}</h3>
                  <p className="text-gray-600 text-sm">{instructor.role}</p>
                  <div className="flex items-center mt-1">
                    <BiStar className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{instructor.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D2F6D] mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F0F1FF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-8 w-8 text-[#2D2F6D]" />
              </div>
              <h3 className="font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">Learn from industry professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F0F1FF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BsClock className="h-8 w-8 text-[#2D2F6D]" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600 text-sm">Study at your own pace</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F0F1FF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BiStar className="h-8 w-8 text-[#2D2F6D]" />
              </div>
              <h3 className="font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600 text-sm">Updated and relevant material</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F0F1FF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BiChevronRight className="h-8 w-8 text-[#2D2F6D]" />
              </div>
              <h3 className="font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600 text-sm">Guidance for your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D2F6D] mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;