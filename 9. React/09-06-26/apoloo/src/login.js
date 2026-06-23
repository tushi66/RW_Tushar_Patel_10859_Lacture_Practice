import React from "react";

const Login = () => {

const isloggedin = true;

return(

    <div>
        <div>
            {
                isloggedin?(
                    <button>Logout</button>
                ) : (
                    <button>Login </button>
                )
            }
        </div>
    </div>
)

}

export default Login