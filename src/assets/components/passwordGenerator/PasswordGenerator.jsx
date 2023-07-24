import { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(13);

  const handleGenerate = () => {
    if (passLength > 24 || passLength < 1) {
      setPassword((prevState) => {
        return "Invalid Range";
      });
    } else {
      let password = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}[]()/\\'\"~,;:.<>";

      for (let i = 0; i < passLength; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        password += characters.substring(rnum, rnum + 1);
      }
      setPassword((prevState) => {
        return password;
      });
    }
  };

  const handleLength = (e) => {
    setPassLength((prevState) => {
      return e.target.value;
    });
  };

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
