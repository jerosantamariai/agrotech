import React from 'react';
import { useContext } from 'react';
import { Context } from '../../store/appContext';
import { Link } from 'react-router-dom';

const UsersDash = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="maindashteiner col-md-6 offset-md-3 col-xs-12" id="gralmt">
            {
                    !!store.errors && (
                        <div className="row fixed-top text-center">
                            <div className="col-md-12">
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>ERROR!</strong> {store.errors.msg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <Link to="/dashboard" className="btn btn-warning col-md-6 offset-md-3 col-xs-12 my-4">Ir Atrás</Link>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="my-3">Administradores Actuales</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.users ? (
                                        store.users.map((user, i) => {
                                            return (
                                                <div className="d-flex">
                                                    {
                                                        user.role.rolename !== "customer" && (
                                                            <>
                                                                <Link
                                                                    to={"/dashboard/dashadminuser/" + user.email}
                                                                    key={i}
                                                                    className="list-group-item list-group-item-action d-flex justify-content-left">
                                                                    {user.id} - {user.email}
                                                                </Link>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }))
                                        : (
                                            <div className="content-center" id="undefined">
                                                <div className="spinner-grow text-light" role="status">
                                                </div>
                                            </div>
                                        )
                                }
                            </ul>
                        </div>
                        <h3 className="my-3">Usuarios Corrientes</h3>
                        <div className="list-group" id="scrollablecorps">
                            <ul>
                                {
                                    !!store.users ?
                                        store.users.map((user, i) => {
                                            return (
                                                <div className="d-flex">
                                                    {
                                                        user.role.rolename === "customer" && (
                                                            <>
                                                                <Link
                                                                    to={"/dashboard/dashadminuser/" + user.email}
                                                                    key={i} 
                                                                    onClick={() => actions.getCurrentUser(user.id)}
                                                                    className="list-group-item list-group-item-action d-flex justify-content-left">
                                                                    {user.id} - {user.email}
                                                                </Link>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                        : (
                                            <div className="content-center" id="undefined">
                                                <div className="spinner-grow text-light" role="status">
                                                </div>
                                            </div>
                                        )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersDash;