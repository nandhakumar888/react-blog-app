import React from "react";
import "../index"


const Contact = () => {
  return <div>
    <form action="https://getform.io/f/d95619c6-eefd-44d7-8017-c55da000f0d2"
            method="POST">
                <h1 className="heading">Let's Talk </h1>
        <input name="name" placeholder="enter the your name"/>
        <input name="name" placeholder="enter the your email"/>
        <input name="name" placeholder="enter the message to me "/>
        <button className="button">submit</button>
    </form>
  </div>;
};

export default Contact;
