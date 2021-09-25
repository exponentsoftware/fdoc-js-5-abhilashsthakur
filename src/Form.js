import React, { useState } from "react";

const initialValues = {
  company: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

export default function Form() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setValues({

      ...values,
      [e.target.name]: [e.target.value],
    }
    );
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(values)
  }

  return (
        <form onSubmit={onSubmit}>
          <input
            value={values.company}
            onChange={handleInputChange}
            name="company"
            label="Company"
          />
          <input
            value={values.position}
            onChange={handleInputChange}
            name="position"
            label="Job Title"
          />
           // ... Rest of the input fields
          <button type="submit"> Submit </button>
        </form>
  );
}