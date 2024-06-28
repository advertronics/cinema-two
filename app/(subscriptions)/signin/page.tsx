import React from "react"
import SigninForm from "@/app/components/SigninForm"
import "./signin.css"

const Signin = () => {
  return (
    <section className="signin">
      <div className="section-wrapper">
        <h1 className="register-heading">Sign In</h1>
        <SigninForm />
      </div>
    </section>
  )
}

export default Signin
