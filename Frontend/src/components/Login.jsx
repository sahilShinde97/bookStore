import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 border rounded-md outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 px-3 border rounded-md outline-none"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Button */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="flex items-center">
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 ml-1">
                  Signup
                </Link>
              </p>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={() => document.getElementById('my_modal_3').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
