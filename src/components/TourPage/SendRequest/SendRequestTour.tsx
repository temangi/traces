import React, { useState, ChangeEvent, FormEvent } from "react";
import scss from "./SendRequest.module.scss";
import { sendRequest } from "@/constants/SendRequest";
import Button from "@/components/Button/Button";

interface InputValuesI {
  [key: string]: string;
}

const SendRequestTour = () => {
  const [inputValues, setInputValues] = useState<InputValuesI>({
    firstName: "",
    secondName: "",
    number: "",
    email: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("tourRequest", JSON.stringify(inputValues));
    setInputValues({
      firstName: "",
      secondName: "",
      number: "",
      email: "",
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const inputs = sendRequest.map(({ title, placeholder, type, id, name }) => (
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
    <section className={scss.tourRequest}>
      <div className="container">
        <header>
          <p className={scss.tourRequest__title}>Send a request</p>
          <span>
            Arctic Wild is a family owned and operated, wilderness guiding
            company based in Fairbanks, Alaska. We specialize in 1 to 3 week,
            fully guided and outfitted adventures across Alaska. Our
            professional guides can take you to the most remote, beautiful and
            wildlife rich areas in Alaska. Our dedication to your enjoyment and
            learning is why people return year after year to enjoy the wilds of
            Alaska with us. Read their testimonials to learn more about why we
            are considered the best guide service in northern Alaska.
          </span>
        </header>
        <footer>
          <form onSubmit={handleSubmit}>
            <main>{inputs}</main>
            <aside>
              <p>Send a request</p>
              <Button title="Send now" variant="btn__green" />
            </aside>
          </form>
        </footer>
      </div>
    </section>
  );
};

export default SendRequestTour;
