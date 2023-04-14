import React, {useState} from 'react';



const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {

        e.preventDefault();

        setHasBeenSubmitted(true);

    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" value={firstName} type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" value={lastName} type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label> 
                    <input class="w-30 m-3 border border-sky-500" value={email} type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label> 
                    <input class="w-30 m-3 border border-sky-500" value={password} type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input class="w-30 m-3 border border-sky-500" value={confirmPassword} type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input class="rounded-full w-35 m-3 border border-sky-500" type="submit" value="Create User" />
            </form>
            
            <div>
                <p>Live Feed</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};
export default UserForm;
