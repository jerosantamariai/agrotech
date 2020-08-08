import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const MainDash = props => {
    const { store } = useContext(Context)
    return (
        <div className="container">
            <div className="maindashteiner col-md-6 offset-md-3 col-xs-12" id="gralmt">
                <h1>Main Dashboard</h1>
                {
                    store.currentUser === null ? (
                        <h1>Lo siento... Debes ingresar como usuario registrado si quieres ver este contenido</h1>
                    ) : (
                            <div className="row">
                                <div className="col-md-10 offset-md-1 col-xs-12">
                                    <h1>Estás conectado!</h1>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default MainDash;