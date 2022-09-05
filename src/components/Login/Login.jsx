import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "./../../App";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { Navigate, useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const Login = () => {
  const history = useNavigate();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newRegister, setNewRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedInUser.name) {
      history("/");
    }
  }, [history, loggedInUser]);
  // Form Changes handler

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newRegister && email && password) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          password: user.reloadUserInfo.passwordHash || undefined,
        };
        setLoggedInUser(newUser);
      } else {
        
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { user } = userCredential;
        console.log(userCredential);
        const newUser = {
          name: name,
          email: user.email,
          password: user.reloadUserInfo.passwordHash || undefined,
        };
        setLoggedInUser(newUser);
        updateName(name);
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateName = (name, photo = "") => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log(`name ${name} Updated`);
      })
      .catch((error) => {
        console.log("updateName Error: ", error);
      });
  };
  if (loggedInUser && !loggedInUser.email) {
    return (
      <div className="container-fluid">
        <form
          className="flex-column justify-content-center mt-5"
          onSubmit={handleSubmit}
        >
          <div className="form-check col-md-6 offset-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={() => setNewRegister(!newRegister)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me SignUp!
            </label>
          </div>

          {newRegister && (
            <div className="form-group col-md-6 offset-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                value={name}
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Name"
                autoComplete="n"
              />
            </div>
          )}

          <div className="form-group col-md-6 offset-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group col-md-6 offset-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-sm-2 offset-5 mt-3"
            onClick={handleSubmit}
          >
            {newRegister ? "Register" : "Login"}
          </button>
        </form>
      </div>
    );
  }
};

export default Login;
