import { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState("");

  const handleGenerate = () => {};

  const handleLength = () => {};

  return (
    <div className="password-generator">
      <h2>Random, Unique and Free</h2>
      <div className="generator-container">
        <label htmlFor="password">
          <p>Password :</p>
          <input
            id="password"
            type="text"
            placeholder="Password"
            defaultValue={password}
          />
        </label>
        <label htmlFor="passLength">
          <p>
            Number of characters : <br />
            (min 1 - max 24)
          </p>
          <input
            id="passLength"
            type="number"
            max={24}
            min={1}
            placeholder="13"
            onChange={handleLength}
            defaultValue={passLength}
          />
        </label>
        <button onClick={handleGenerate}>Generate</button>
      </div>
    </div>
  );
};
