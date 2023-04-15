import React, {useState} from 'react';



const UserForm = (props) => {


    const [form, setFrom] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const createUser = (e) => {
        setFrom({
            ...form,
            [e.target.name]: e.target.value
    })

        e.preventDefault();

        //setHasBeenSubmitted(true);

    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
            //{
               // hasBeenSubmitted ? 
               // <h3>Thank you for submitting the form!</h3> :
                //<h3>Welcome, please submit the form.</h3> 
            }
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="firstName" name="firstName" type="text" onChange={createUser} />
                </div>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="lasName" name="lasName" type="text" onChange={createUser} />
                </div>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="email" name="email" type="text" onChange={createUser} />
                </div>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="passowrd" name="password" type="text" onChange={createUser} />
                </div>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="confrimPassword" name="confirmPassword" type="text" onChange={createUser} />
                </div>
                <input class="rounded-full w-35 m-3 border border-sky-500" type="submit" value="Create User" />
            </form>
            
            <div>
                {/* <p>Live Feed</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p> */}
            </div>
        </div>
    );
};
export default UserForm;
