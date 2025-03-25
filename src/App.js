import React from "react";
import UserForm from "./UserForm";

const App = () => {
    return (
        <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>User Login System</h1>
            <p>
                Use the form below to log in. Enter one of the usernames from the database
                and a password. If the login is successful, user details will be displayed.
            </p>
            <UserForm />
        </div>
    );
};

export default App;
