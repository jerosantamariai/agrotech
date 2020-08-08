import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const Register = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="registeiner gralmt col-md-6 offset-md-3 col-xs-12 mt-5">
            <h1>Register</h1>
            <form onSubmit={e => actions.register(e, props.history)}>
                <div className="form-group">
                    <label htmlFor="inputUsuario">Usuario</label>
                    <input type="email" className="form-control" id="inputUsuario" aria-describedby="emailHelp" name="email" onChange={actions.handleChange} value={store.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="password" onChange={actions.handleChange} value={store.password} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;