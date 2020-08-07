import React from 'react';

const Register = props => {
    return (
        <div className="registeiner gralmt col-md-6 offset-md-3 col-xs-12 mt-5">
            <h1>Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="inputUsuario">Usuario</label>
                    <input type="email" className="form-control" id="inputUsuario" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;