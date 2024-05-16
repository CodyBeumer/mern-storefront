import { useState } from "react";
import { useAuth } from "../hooks/AuthProvider";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  //handle remember user

  const auth = useAuth();
  function handleLogin() {
    //handle username and password validation
    auth.login(input);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex h-75 container align-items-center w-50 m-auto">
      <div className='form-signin w-100 m-auto'>
          <form>
              <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
              <div className='form-floating'>
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleInput}/>
                  <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className='form-floating'>
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleInput}/>
                  <label htmlFor='floatingPassword'>Password</label>
              </div>
              <div className='form-check text-start my-3'>
                <input type='checkbox' value='remember-me' id='flexCheckDefault' />
                <label className='form-check-label' htmlFor='flexCheckDefault'>Remember me</label>
              </div>
              <button className="btn btn-primary w-100 py-2" onClick={handleLogin} type="submit">Sign in</button>
          </form>
      </div>
    </div>
  )
}

export default Login