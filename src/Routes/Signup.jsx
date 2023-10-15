import React from 'react'
import { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import darklogo from "../assets/Darklogo.png"
import { Link } from 'react-router-dom';

function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate()

    async function handleSignUp(e){

      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
      .then((user) => {
          // Success...
          navigate('/dashboard')
          toast.success('Successfull!');
          // console.log(user)
          //...
      })
      .catch((error) => {
          // Error
          toast.error('Try again!');
          // console.log(error)
      })
      }

  return (
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                <div className='mx-auto flex items-center justify-center'>
                <Link to="/">
      <img src={darklogo} alt="paycheck logo" className='w-48 h-10' />
    </Link>                </div>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Sign up to be among the early users of Paycheck today.
                </p>

                <form
                    action=""
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign up for an account</p>

                    <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                    <input className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" 
                    onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" required/>
            
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        </span>
                    </div>
                    </div>

                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>

                    <div className="relative">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" required
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                        </span>
                    </div>
                    </div>


                    <button 
                    onClick={(e) => {handleSignUp(e)}}
                    type="submit"
                    className="block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                    >
                    Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                    Already have an account?
                    <a className="underline" href="/signin">Sign In</a>
                    </p>
                </form>
                </div>
                </div>  
  )
}

export default Signup
