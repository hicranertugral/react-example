import React, { useState } from "react";

const Form2 = () => {
  const [form, setForm] = useState({ name: "", surname: "", sectionValue: "" });
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <strong>Form2</strong>
      <br />
      <input
        placeholder="İsim"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        placeholder="Soyadı"
        name="surname"
        value={form.surname}
        onChange={handleChange}
      />

      <div>
        <div>Seçenek:</div>
        <select value={form.sectionValue} name="sectionValue" onChange={handleChange}>
          <option value="Evet">Evet</option>
          <option value="Hayır">Hayır</option>
        </select>
      </div>
      <br />
      <br />
      <div>
        <div>
          <strong>İsim:</strong>
          {form.name} {form.surname}
        </div>
        <div>
          <strong>Seçenek:</strong>
          {form.sectionValue}
        </div>
      </div>
    </div>
  );
};

export default Form2;
