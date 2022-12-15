/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <strong>Form1</strong>
      <br />
      <input
        placeholder="isim"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        placeholder="soyisim"
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
      />

      <div>
        <div> Cinsiyet</div>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option>Erkek</option>
          <option>Kadın</option>
        </select>
      </div>

      <div>
        <div>
          <strong>İsim:</strong>
          {name} {surname}
        </div>
        <div>
          <strong>Cinsiyet:</strong>
          {gender}
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Form;
