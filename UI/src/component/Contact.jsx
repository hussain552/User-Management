import React, { useState, useEffect } from 'react';
import { Validations } from './Validations';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bgIndex, setBgIndex] = useState(0);
  const [Errormessage,setErrorMessage]=useState('')

  const backgrounds = [
    'from-green-200 to-blue-300',
    'from-purple-200 to-pink-300',
    'from-yellow-200 to-red-300',
    'from-indigo-200 to-purple-300',
    'from-blue-200 to-teal-300',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [backgrounds.length]);
const userData={
    name,
    number,
    email
}



  const handleSubmit = async(e) => {
    e.preventDefault();
  if (Validations(userData, setErrorMessage)){
         console.log("All Good",userData)
         try {
            const response = await axios.post('http://localhost:8000/create', userData);
            console.log(response.data);
            setName('')
            setNumber('')
            setEmail('')
          } catch (error) {
            console.error('Error creating user:', error);
          }
   }
   else{
     console.log("All Feilds are Required Good",userData)
    alert(Errormessage)
   }
  };

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r ${backgrounds[bgIndex]} transition-all duration-1000`}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-600 mb-6">Get in Touch</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
            <input
              type="tel"
              id="number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
