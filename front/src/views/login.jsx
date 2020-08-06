import React from 'react';

const Login = () => {
    return(
        <div className="loginsteiner col-md-6 offset-md-3 col-xs-12">
            <h1>Log In</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="inputUsuario">Usuario</label>
                    <input type="email" className="form-control" id="inputUsuario" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;