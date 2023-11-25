import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function Login() {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("admin"),
      password: data.get("P@ssw0rd@admin"),
    });
  };

  return (
    <>
      <div className="login-box">
        <div className="login-logo">
          <a>
            <b>Data</b>Com
          </a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group has-feedback">
              <input
                // type="email"
                className="form-control"
                name="text"
                placeholder="User Name"
                id="email"
              />
              {/* <span className="glyphicon glyphicon-envelope form-control-feedback" /> */}
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                id="password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
