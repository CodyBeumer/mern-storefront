import React from 'react'

function SignIn() {
  return (
    <main className='form-signin w-100 m-auto'>
        <form>
            <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
            <div className='form-floating'>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className='form-floating'>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='form-check text-start my-3'></div>
        </form>
    </main>
  )
}

export default SignIn