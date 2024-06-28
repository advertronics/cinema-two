import React from "react"
import RegisterForm from "@/app/components/RegisterForm"

import "./register.css"

const Register = () => {
  return (
    <section className="signin">
      <div className="section-wrapper">
        <h1 className="register-heading">Welcome to Cinema</h1>
        <RegisterForm />
      </div>
    </section>
  )
}

export default Register
