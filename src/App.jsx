import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import ListItem from './components/ListItem';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //   const [firstName , setFirstName] = ['ritesh', 'f'] ;
  // console.log(firstName, setFirstName)
  console.log(useState('ritesh'));
  const [firstName, setFirstName] = useState('Ritesh');
  const [count, setCount] = useState(0);
  // let firstName = 'Ritesh';
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleClick = () => {
    setFirstName('CP');
    console.log(firstName);
  };

  return (
    <div>
      <header>
        <h1 className="h-12 text-center px-4 bg-indigo-700 text-3xl font-semibold text-white">
          Event System
        </h1>
        <h1>hi</h1>
      </header>

      <button
        className="px-8 py-2 bg-indigo-700 m-10 text-white rounded-md"
        onClick={handleClick}
      >
        Click Me
      </button>
      <h1 className="text-4xl font-bold mb-10 text-center">{firstName}</h1>
      {/* 
      <p className="text-center text-4xl text-sky-500 font-bold">{count}</p> */}
      <p>{username}</p>
      <p>{password}</p>
      {/* form component */}
      <div className="m-6">
        <Form
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </div>
      {/* list component */}
      <ListItem />
    </div>
  );
}

export default App;
