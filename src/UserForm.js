import {useState} from "react";

const mockDatabase = [
    {username: "hulk", name: "Bruce Banner", role: "Scientist", status: "Active"},
    {username: "spiderman", name: "Peter Parker", role: "Photographer", status: "Active"},
    {username: "thor", name: "Thor Odinson", role: "Asgardian God", status: "Active"},
    {username: "stark", name: "Tony Stark", role: "Engineer", status: "Inactive"},
];

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [profile, setProfile] = useState({
        username: '',
        name: '',
        role: '',
        status: ''
    });
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let username = formData.username;
        let password = formData.password;
        if (username.length === 0 || password.length === 0) {
            setError(true);
            setErrorMsg("Both fields are required.");
            return;
        } else if (password.length < 6) {
            setError(true);
            setErrorMsg("Password must be at least 6 characters.");
            return;
        }
        let found = false;
        for(let i =0;i<mockDatabase.length; i++){
            if(username === mockDatabase[i].username){
                found = true;
                setProfile(mockDatabase[i]);
            }
        }
        if(!found) setErrorMsg("User Not Found");
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        setSubmitted(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" onChange={handleChange}/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div style={{color: "red"}}>
                {error && errorMsg}
            </div>
            {submitted &&
                <div>
                    <h1>User Details</h1>
                    <p>Name: {profile.name}</p>
                    <p>Role: {profile.role}</p>
                    <p>Status: {profile.status}</p>
                </div>
            }
        </div>
    );
};
export default UserForm;