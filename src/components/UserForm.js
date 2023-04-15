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

    };
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="firstName" name="firstName" type="text" onChange={createUser} />
                    {form.firstName && form.firstName.length < 3 ? <p>Name must be longer than 3 characters</p>: null}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="lasName" name="lastName" type="text" onChange={createUser} />
                    {form.lastName && form.lastName.length < 3 ? <p>Last Name must be longer than 3 characters</p>: null}
                </div>
                <div>
                    <label>Email Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="email" name="email" type="text" onChange={createUser} />
                    {form.email && form.email.length < 3 ? <p>Email must be longer than 3 characters</p>: null}
                </div>
                <div>
                    <label>Password: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="passowrd" name="password" type="text" onChange={createUser} />
                    {form.password && form.password.length < 3 ? <p>Password must be longer than 3 characters</p>: null}
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="confirmPassword" name="confirmPassword" type="text" onChange={createUser} />
                    {form.password !== form.confirmPassword ? <p>Passwords Must Match!
                    </p>: null}
                </div>
                <input class="rounded-full w-35 m-3 border border-sky-500" type="submit" value="Create User" />
            </form>
            
            <div>
                <p>Live Feed</p>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPassword}</p>
            </div>
        </div>
    );
};
export default UserForm;
