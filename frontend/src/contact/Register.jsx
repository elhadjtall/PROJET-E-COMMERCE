import { useState } from "react";


const Register = () => {
  const [count, setCount] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCount({ ...count, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
    alert("Form submitted successfully!");
    setCount({ name: "", email: "", number: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form >
        <div className="row">
          <div>
            <label htmlFor="name" className="form-label">Username</label>
            <input 
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={count.name}
            onChange={handleChange}
            required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={count.email}
            onChange={handleChange}
            required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Phone</label>
            <input 
            type="number"
            className="form-control"
            name="number"
            id="number"
            value={count.number}
            onChange={handleChange}
            required
             />
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </div>
      </form>

    </div>

  );

};

export default Register;