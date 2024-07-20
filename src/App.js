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
    <div className="max-w-5xl p-10 mx-auto my-20 border border-black rounded-2xl">
      <div>
        <h1 className="flex items-center justify-center pt-10 pb-4 text-4xl font-bold ">
          Subscribe to our newsletter
        </h1>
        <h2 className="flex items-center justify-center font-thin tex-base ">
          Enter your email to join our newsletter.
        </h2>
      </div>
      <form>
        <div className="flex justify-center max-w-3xl gap-3 pt-10 mx-auto">
          <input
            type="email"
            placeholder=" Enter your Email"
            value={email}
            onChange={handleEmail}
            className="flex-1 pl-4 border border-black rounded-full place-content-evenly h-14"
          />

          <button className="px-8 text-white bg-red-600 border border-black rounded-full text-nowrap">
            Get Now
          </button>
        </div>
        <div className="flex items-center justify-center mt-8 text-red-600">
          {message}
        </div>
        <div className="flex items-center justify-center gap-2">
          <input id="checkbox" type="checkbox" onClick={handleChecked} />{" "}
          <label htmlFor="checkbox">
            I agree to Alegance privacy policy and Term Of Use
          </label>
        </div>
        <div className="flex items-center justify-center mt-4">
          {!checked
            ? "You need to check the box"
            : "you can now be a part of Alegance's  newsletter."}
        </div>
      </form>
    </div>
  );
}

export default App;
