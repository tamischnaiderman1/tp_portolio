

import React from "react";
import "./contacto.css"

export default function Contact() {

  return (
    <div class="container">
        <div class="card">
            <a class="singup">Sign Up</a>
            <div class="inputBox1">
                <input type="text" required="required"/>
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Mensaje</span>
            </div>


            <button class="enter">Enter</button>

        </div>
    </div>
  )


}