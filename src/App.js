import { useState } from "react";

function App() {
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  function handleEmail(event) {
    let inputValue = event.target.value;
    setEmail(inputValue);

    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(inputValue)) {
      setMessage("Email is invalid.");
    } else {
      setMessage("");
    }
  }

  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div className="border border-black rounded-2xl m-10">
      <div>
        <h1 className="flex justify-center items-center pb-4 pt-10 font-bold text-4xl ">
          Subscribe to our newsletter
        </h1>
        <h2 className="flex justify-center items-center font-thin tex-base ">
          Enter your email to join our newsletter.
        </h2>
      </div>
      <form>
        <div className="flex justify-center items-center pt-10 pb-20">
          <input
            type="email"
            placeholder=" Enter your Email"
            value={email}
            onChange={handleEmail}
            className="border border-black place-content-evenly    w-5/12 h-14 rounded-full"
          />

          <button className="border border-black rounded-full h-13 w-20 bg-red-600 text-white">
            Get Now
          </button>
        </div>
        <div className="flex justify-center items-center m-10 text-red-600">
          {message}
        </div>
        <div className="flex justify-center items-center">
          <input type="checkbox" onClick={handleChecked} /> I agree to Alegance
          privacy policy and Term Of Use
        </div>
        <div className="flex justify-center items-center m-10">
          {!checked
            ? "You need to check the box"
            : "you can now be a part of Alegance's  newsletter."}
        </div>
      </form>
    </div>
  );
}

export default App;
