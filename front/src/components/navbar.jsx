import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';

const Navbar = props => {
    const { store, actions } = useContext(Context)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="#">Agrotech</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {
                        store.currentUser !== null ? (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {
                                        !!store.currentUser.users.name === null ? (
                                            <>
                                                {store.currentUser.users.name}
                                            </>
                                        ) : (
                                                <>
                                                    {store.currentUser.users.email}

                                                </>
                                            )
                                    }
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" href="#">Panel de Control</Link>
                                    <Link className="dropdown-item" href="#">Configuración</Link>
                                    <hr />
                                    <Link className="dropdown-item" href="/" onClick={actions.logout}>Cerrar Sesión</Link>
                                </div>
                            </li>

                        ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Log In</Link>
                                    </li>
                                </>
                            )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);