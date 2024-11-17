import React from 'react';

const servicesData = [
  { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.', icon: '🌐' },
  { id: 2, title: 'Mobile App Development', description: 'Creating mobile apps for Android and iOS.', icon: '📱' },
  { id: 3, title: 'UI/UX Design', description: 'Designing user-friendly and intuitive interfaces.', icon: '🎨' },
  { id: 4, title: 'SEO Optimization', description: 'Improving search engine rankings and visibility.', icon: '🚀' },
  { id: 5, title: 'Cloud Services', description: 'Providing cloud solutions and infrastructure.', icon: '☁️' }
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center justify-center py-12">
    <h1 className="text-5xl font-bold text-white mb-12">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {servicesData.map(service => (
        <ServiceCard 
          key={service.id} 
          title={service.title} 
          description={service.description} 
          icon={service.icon} 
        />
      ))}
    </div>
  </div>
);

export default Services;
