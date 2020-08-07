const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            currentUser: null,
            errors: null,
            email: '',
            password: '',
        },

        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            isAuth: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuth: sessionStorage.getItem('isAuth')
                    })
                }
            },

            getUsers: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        // const newData = data.map((elem) => {
                        //     return { ...elem, title: elem.title.replace(/[!@#$%^&*(),.?":{}|<> ]/g, '_')}
                        // })                       
                        // console.log(newData);
                        setStore({
                            users: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            login: (e, 
                history
                ) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.msg) {
                            console.log(data);
                            const action = getActions();
                            action.getUsers(store.path + "/users/");
                            setStore({
                                errors: data
                            })
                        } else {
                            setStore({
                                currentUser: data,
                                isAuth: true,
                                email: '',
                                password: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuth', true)
                            history.push("/dashboard");
                        }
                    })
            },
        }
    }
}



export default getState;