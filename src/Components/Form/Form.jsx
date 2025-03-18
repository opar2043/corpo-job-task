import React from 'react';
import Table from '../Table/Table';

const ContactForm = () => {
  return (
    <div className='flex md:justify-between flex-col md:flex-row w-full mt-8 items-center'>
      <div className="w-full lg:w-1/2 mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Contact Us</h1>
        </div>

        <form action="#" className="w-full mt-8 space-y-2 p-6 rounded-lg shadow">
        <label htmlFor="Email" className="block text-sm font-medium">E-mail</label>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              className="w-full border rounded-lg border-gray-300 p-4 text-sm shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

    <div className='md:w-1/2 w-full'>
        <Table></Table>
    </div>
</div>

  );
};

export default ContactForm;
