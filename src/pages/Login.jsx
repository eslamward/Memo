import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../store/features/auth/authApi";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error: err }] = useLoginMutation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.email) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid email format";

    if (!form.password) err.password = "Password is required";
    else if (form.password.length < 6) err.password = "Min 6 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(login(form));
  };

  console.log(err);
  //TODO HELPER METHOD TO handel error with object or string
  return (
    <div className="dark:bg-background-dark">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
        {isError ? <p>{err.data.error}</p> : null}

        {isLoading ? (
          <p>"loaing..."</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-96 space-y-4"
          >
            <h2 className="text-2xl font-semibold text-center dark:text-white">
              Login
            </h2>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full p-3 rounded-xl border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-xl font-semibold"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
