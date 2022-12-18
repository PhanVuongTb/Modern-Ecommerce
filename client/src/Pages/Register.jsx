/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <form className='bg-white p-4 shadow-md border rounded my-5 py-3'>
        <h1 className='text-center w-full p-3 text-gray-500 text-xl font-bold'>
          Register Account
        </h1>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>Firstname</label>
          <input
            id='firstname'
            type='text'
            placeholder='Enter Firstname'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded'
          />
        </div>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>Surname</label>
          <input
            id='surname'
            type='text'
            placeholder='Enter surname'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded'
          />
        </div>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>Username</label>
          <input
            id='username'
            type='text'
            placeholder='Enter username'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded'
          />
        </div>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>Email</label>
          <input
            id='email'
            type='Email'
            placeholder='Enter email'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded'
          />
        </div>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>Password</label>
          <input
            id='password'
            type='text'
            placeholder='password'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded'
          />
        </div>

        <div className='m-2'>
          <label className='text-gray-500 mb-3 font-bold'>
            Confirm Password
          </label>
          <input
            id='confirm_password'
            type='text'
            placeholder='Confirm password'
            className='w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded'
          />
        </div>

        <div className='flex flex-col justify-between items-center my-3 mb-5 '>
          <button className='text-white font-bold bg-blue-500 py-2 px-3 ml-1 border rounded-md hover:bg-blue-700'>
            Register
          </button>
          {/* <Link to='/login' className=' text-blue-500'>
            Already have an account
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
