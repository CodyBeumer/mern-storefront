import { useState } from 'react';
import Form from 'react-bootstrap/Form';
const SignUp = () => {
    const [input, setInput] = useState({
        name: "",
        phone_number: "",
        email_address: ""
    });

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(input);
    }

    const handleInputChange = (e) => {
        input[e.target.name] = e.target.value;
        setInput(input)
    }

    return (
        <div className='container-fluid w-50 mt-5'>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' type="text" name='name' onChange={handleInputChange} />
                <div className='mb-2'>
                    <label htmlFor='name'>Email Address:</label>
                    <input id='name' type="email" name='email_address' onChange={handleInputChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Phone Number: (Optional)</label>
                    <input id='name' type="tel" name='phone_number' onChange={handleInputChange} />
                </div>
                <button className='btn btn-primary' onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
)
}

export default SignUp;