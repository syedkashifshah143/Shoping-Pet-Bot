import React, { useState } from 'react'

const Feedback = () => {

  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='max-w-lg mx-auto mt-[120px] w-full h-[677px]'>
      <h2 className="text-2xl font-bold text-center mb-4">FEEDBACK FORM</h2>
      <form className="space-y-4 ">
          <div>
            <label className='font-bold' >Name</label>
            <input type="text" placeholder='Enter Your Name'  onChange={(e) => setName(e.target.value)} value={name}
              className="mt-1  w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder:p-2"
              required/>
          </div>
          <div>
            <label className='font-bold' >Email</label>
            <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email}
              className="mt-1  w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 placeholder:p-2"
              required/>
          </div>
          <div>
            <label className=" font-bold ">Feedback</label>
            <textarea  placeholder='Enter Your Message' onChange={(e) => setFeedback(e.target.value)} value={feedback} 
              className="mt-1  w-full border-2 border-gray-300 rounded-md shadow-sm h-40 focus:outline-none focus:ring-0 placeholder:p-2 "
              required/>
          </div>
          <div>
            <button type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm  "
            >Submit</button>
          </div>
        </form>
    </div>
  );
};

export default Feedback
