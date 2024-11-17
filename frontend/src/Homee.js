import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
function Homee() {
  const [userData, setUserData] = useState([]); // This Stores All Database Data In Array for displaying on home page
  const [newUser, setNewUser] = useState({ name: '', email: '', number: '' }); // State for creating a new user
  const [selectedUser, setSelectedUser] = useState(null); //
  const [formData, setFormData] = useState({ name: '', email: '', number: '' });
  // const [errorMessage, setErrorMessage] = useState(''); // For error handling

  // Responsible for pop-up form to update existing data
  const handleUpdateClick = (user) => {
    setSelectedUser(user); // Store selected user data
    setFormData({ name: user.name, email: user.email, number: user.number }); // Pre-fill form with current user data
  };

  const handleInputChange = (e) => {
    const updatedFormData = { ...formData }; // Create a copy of the current form data
    updatedFormData[e.target.name] = e.target.value; // Update the specific field
    setFormData(updatedFormData); // Set the new form data
  };



  const handleUpdateSubmit = async (id) => {
    console.log(formData)
    try {

      const response = await axios.put(`http://localhost:8000/update/${id}`, formData);
      console.log('frontend responde:', response.data);
      alert(response.data.message);
      fetchUsers(); // Refresh user list
      setSelectedUser(null); // Clear selected user after update
    }

     catch (error)
      {
      if (error.response) {
        // Handling the 400 error from validation
        alert(error.response.data.error); // Show error from backend

      }
       else {
        alert('An error occurred. Please try again later.');
      }
    }

  };







  // Create a new user
  const createUser = async () => {

    try {
      const response = await axios.post('http://localhost:8000/create', newUser);
      // Assuming the backend sends a success message
      console.log(response.data);
      // alert(response.data.message); // Show the success message
      toastr.success(response.data.message);
      fetchUsers()
      setNewUser({ name: '', email: '', number: '' });
    } 
    

    catch (error)

     {
      if (error.response) {
        // Handling the 400 error from validation
        alert(error.response.data.error); // Show error from backend

      }
       else {
        alert('An error occurred. Please try again later.');
      }

    }
  };

  // Fetch all users from the API
  const HandleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete/${id}`);
      console.log('Deleted successfully:', response.data);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users'); // Adjust your API endpoint accordingly
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">User Management</h1>

        {/* Create User Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create User</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <input
            type="text"
            value={newUser.name}
            placeholder="name" // Changed from "Name"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="email"
            value={newUser.email}
            placeholder="Email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="number"
            value={newUser.number}
            placeholder="Number"
            onChange={(e) => setNewUser({ ...newUser, number: e.target.value })}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            onClick={() => createUser()}
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Create User
          </button>
        </div>

        {/* Users List Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Users List</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          {userData.map((user) => (
            <div key={user._id} className="bg-gray-100 rounded-lg p-4 mb-4 shadow-lg transition-transform transform hover:scale-105">
              <p className="text-lg font-bold text-gray-900">
                <span className="text-indigo-600">name:</span> {user.name}
              </p>
              <p className="text-md text-gray-700">
                <span className="text-indigo-600">Email:</span> {user.email}
              </p>
              <p className="text-md text-gray-700">
                <span className="text-indigo-600">Number:</span> {user.number}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => HandleDelete(user._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 mr-2"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleUpdateClick(user)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Update Fields */}
        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Update User</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateSubmit(selectedUser._id); }}>
                {/* Name Input */}
                <label className="block mb-4">
                  <span className="text-gray-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange} // Use handleInputChange function
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>

                {/* Email Input */}
                <label className="block mb-4">
                  <span className="text-gray-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} // Use handleInputChange function
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>

                {/* Number Input */}
                <label className="block mb-4">
                  <span className="text-gray-700">Number</span>
                  <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange} // Use handleInputChange function
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>

                {/* Submit and Cancel Buttons */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mr-4"
                  >
                    Submit
                  </button>

                  <button
                    onClick={() => setSelectedUser(null)} // Close modal on cancel
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homee;
