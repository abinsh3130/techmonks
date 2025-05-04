import React from 'react';
import { BiAward, BiBookOpen, BiBriefcase, BiCheckCircle, BiGlobe } from 'react-icons/bi';
import { PiUserSquare } from 'react-icons/pi';

const About = () => {
  const stats = [
    { label: 'Students', value: '25,000+', icon: <PiUserSquare className="h-6 w-6 text-indigo-600" /> },
    { label: 'Courses', value: '50+', icon: <BiBookOpen className="h-6 w-6 text-indigo-600" /> },
    { label: 'Instructors', value: '20+', icon: <BiAward className="h-6 w-6 text-indigo-600" /> },
    { label: 'Countries', value: '150+', icon: <BiGlobe className="h-6 w-6 text-indigo-600" /> },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former Google engineer with 15+ years of experience in tech education.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Data science expert who previously led engineering teams at Amazon.'
    },
    {
      name: 'Alex Rivera',
      role: 'Head of Curriculum',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Cloud computing specialist with a passion for creating engaging learning experiences.'
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Student Success',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Former career coach who has helped thousands of students land their dream jobs.'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support.',
      icon: <BiAward className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and curriculum to stay ahead of industry trends.',
      icon: <BiBriefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Accessibility',
      description: 'We believe quality education should be accessible to everyone, regardless of background.',
      icon: <BiGlobe className="h-8 w-8 text-indigo-600" />
    },
    {
      title: 'Community',
      description: 'We foster a supportive community where students can learn, grow, and connect with peers.',
      icon: <PiUserSquare className="h-8 w-8 text-indigo-600" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechMonks</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            We're on a mission to transform tech education and empower the next generation of developers, data scientists, and tech leaders.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                TechMonks was founded in 2020 with a simple mission: to make high-quality tech education accessible to everyone. Our founder, Sarah Johnson, experienced firsthand the challenges of learning to code and navigating the tech industry.
              </p>
              <p className="text-gray-700 mb-4">
                After spending 15 years at leading tech companies, Sarah assembled a team of industry experts who shared her passion for education. Together, they created a platform that combines practical, hands-on learning with industry-relevant skills.
              </p>
              <p className="text-gray-700">
                Today, TechMonks has helped over 25,000 students from 150+ countries launch and advance their careers in tech. We continue to expand our course offerings and improve our learning platform to meet the evolving needs of the tech industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="TechMonks team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Learning</h2>
              <p className="text-gray-700 mb-6">
                We believe that effective learning happens when theory meets practice. Our courses are designed with a hands-on approach that emphasizes real-world projects and practical skills.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <BiCheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Project-Based Learning</h4>
                    <p className="text-gray-600">Build real-world projects that you can add to your portfolio.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BiCheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Industry-Relevant Curriculum</h4>
                    <p className="text-gray-600">Learn the skills that employers are actually looking for.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BiCheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Expert Instructors</h4>
                    <p className="text-gray-600">Learn from professionals with years of industry experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BiCheckCircle className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-1">Supportive Community</h4>
                    <p className="text-gray-600">Connect with peers and mentors who will support your learning journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students learning" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of industry experts is passionate about education and committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading tech companies to ensure our curriculum meets industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <span className="text-xl font-bold text-gray-400">Google</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <span className="text-xl font-bold text-gray-400">Microsoft</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <span className="text-xl font-bold text-gray-400">Amazon</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <span className="text-xl font-bold text-gray-400">IBM</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Start your journey to a successful tech career with TechMonks today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/courses" className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-md transition duration-300">
              Browse Courses
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-indigo-700 font-medium py-3 px-6 rounded-md transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;