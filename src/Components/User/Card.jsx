import React from 'react';

const Card = ({ user }) => {
  const { id, name, username, email, address } = user;
  const { street, city, zipcode } = address;

  return (
    <div className="card bg-white border shadow-lg rounded-lg  transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="card-body text-center py-5">
        
        {/* Name & Username */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 ">@{username}</p>
        
        {/* Email */}
        <p className="text-sm text-gray-500">{email}</p>
        
        {/* Address */}
        <div className="bg-gray-100 rounded-lg">
          <p className="text-xs text-gray-500">
            {street}, {city}, {zipcode}
          </p>
        </div>
        
        {/* Contact Button */}
        <div className="mt-4">
          <button className="btn  py-2 px-4 rounded-lg font-semibold text-white bg-black hover:bg-blue-600 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
