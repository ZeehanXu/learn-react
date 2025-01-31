import { SetStateAction,useState } from "react";
export default function Form() {

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  function handleFirstNameChange(e: { target: { value: SetStateAction<String>; }; }) {
    setFName(e.target.value);
  }

  function handleLastNameChange(e: { target: { value: SetStateAction<String>;  }; }) {
    setLName(e.target.value);
  }

  function handleReset() {
    setFName('');
    setLName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
