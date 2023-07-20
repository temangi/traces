import React, { useState, ChangeEvent, FormEvent } from "react";
import scss from "./Request.module.scss";
import { request } from "../../constants/Request";
import Button from "../Button/Button";

interface InputValuesI {
  [key: string]: string;
}

const Request: React.FC = () => {
  const [inputValues, setInputValues] = useState<InputValuesI>({
    firstName: "",
    secondName: "",
    number: "",
    email: "",
    date: "",
    tour: "",
    comment: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("request", JSON.stringify(inputValues));
    setInputValues({
      firstName: "",
      secondName: "",
      number: "",
      email: "",
      date: "",
      tour: "",
      comment: "",
    })
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const inputs = request.map(({ title, placeholder, type, id, name }) => (
    <section key={id}>
      <p>{title}</p>
      <input
        placeholder={placeholder}
        type={type}
        required
        value={inputValues[name]}
        name={name}
        onChange={handleInputChange}
      />
    </section>
  ));

  return (
    <section className={scss.request}>
      <div className="container">
        <header>Send a request</header>
        <form onSubmit={handleSubmit}>
          <main>{inputs}</main>
          <aside>
            <p>Your comments</p>
            <input
              placeholder="Your wishes"
              type="text"
              required
              className={scss.request__input}
              value={inputValues.comment}
              name="comment"
              onChange={handleInputChange}
            />
          </aside>
          <footer>
            <p>Send a request</p>
            <Button title={"Send now"} variant="btn__yellow" />
          </footer>
        </form>
      </div>
    </section>
  );
};

export default Request;
