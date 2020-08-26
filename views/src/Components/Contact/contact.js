import React, { useState } from "react";
import { images } from "../../Images";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const disabled =
    name === "" || subject === "" || message === "" || email === "";

  return (
    <div className="contact">
      <h1>Ask Us Anything</h1>

      <div className="contact-content">
        <div>
          <p>Address: 669 West Homestead Road</p>
          <p>City & State: Sunnyvale, California</p>
          <p>Zipcode: 94087</p>
        </div>
        <div>
          <form>
            <div>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea placeholder="Message" />
          </form>

          <button disabled={disabled}>Send</button>
        </div>
        <div>
          <p>Follow us on</p>
          <img src={images.fb} alt="..." width="50px" />
          <img src={images.insta} alt="..." width="48px" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
