import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const MainDash = props => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className="maindashteiner col-md-6 offset-md-3 col-xs-12" id="gralmt">
                {
                    store.currentUser === null ? (
                        <h1>Lo siento... Debes ingresar como usuario registrado si quieres ver este contenido</h1>
                    ) : (
                            <div className="row">
                                <div className="col-md-10 offset-md-1 col-xs-12">
                                    <div className="row text-center">
                                        {
                                            !!store.currentUser && (
                                                <div className="col-md-12 my-3 mx-auto">
                                                    {
                                                        store.currentUser.users.name === null ? (
                                                            <h1>Hola <strong>{store.currentUser.users.email}</strong>!!!</h1>
                                                        ) : (
                                                                <h1>Hola <strong>{store.currentUser.users.name} {store.currentUser.users.lastname}</strong>!!!</h1>

                                                            )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 my-3 mx-auto">
                                            {
                                                store.currentUser && store.currentUser.users.role.rolename === "admin" && (
                                                    <>
                                                        <div className="list-group">
                                                            <p>Menú Admin</p>
                                                            <Link to="/dashboard/usuarios" className="list-group-item list-group-item-action">Usuarios Registrados</Link>
                                                            <Link to="/dashboard/dashadminblog" className="list-group-item list-group-item-action">Blog's Admin</Link>
                                                        </div>
                                                        <hr className="hr1 my-3 col-md-10" />
                                                    </>
                                                )
                                            }
                                            <div className="list-group">
                                                <Link to="/dashboard/dashuser" className="list-group-item list-group-item-action" onClick={() => actions.getCurrentUser(store.currentUser.users.id, store.currentUser.users.email)}>Información Personal</Link>
                                                <Link to="/dashboard/dashpass" className="list-group-item list-group-item-action">Cambiar Clave</Link>
                                                <Link to="/" className="list-group-item list-group-item-action" onClick={actions.logout}>Cerrar Sesión</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default MainDash;