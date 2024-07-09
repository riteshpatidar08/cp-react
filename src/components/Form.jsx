import React from 'react';
import { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    console.dir(event);
    console.log('Username is changed');
    setUsername(event.target.value);
  };

  const handlePasswordChange = () => {
    console.log('Password is changed');
  };

  return (
    <div className="p-10 border-2 border-indigo-300 rounded-md shadow-md">
      <h1 className="text-3xl  font-bold line-through text-red-400">
        1.Get the values from input
      </h1>
      <h1 className="text-3xl  font-bold line-through text-red-400">
        2.Set in the state variable
      </h1>
      <h1 className="text-3xl  font-bold  text-green-400">
        3.Show username and password in the App Component
      </h1>
      <h1 className='text-3xl font-bold'>{username}</h1>
      <h1 className="text-3xl text-indigo-700 font-semibold mb-10">Login</h1>
      <form>
        <label className="text-xl font-semibold mr-2">Username</label>
        <input
          className="border-2 border-indigo-700 rounded-md p-3 h-10 w-64"
          type="text"
          onChange={handleChange}
        />

        <label className="text-xl font-semibold ml-2">Password</label>
        <input
          className="border-2 border-indigo-700 rounded-md p-3 ml-2 h-10 w-64"
          type="password"
          onChange={handlePasswordChange}
        />
        <button
          type="submit"
          className="px-8 py-2 bg-indigo-700 m-10 text-white rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
