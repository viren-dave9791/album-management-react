export const loadUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/user')
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_USERS',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_USERS_FAILED',
            payload: e.message
        }))
    }
}

export const createUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/user')
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_USERS',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_USERS_FAILED',
            payload: e.message
        }))
    }
}



export const loadAlbums = (userId) => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_ALBUMS_PENDING'
        })
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                // setTimeout(() => {
                    dispatch({
                        type: 'LOAD_ALBUMS',
                        payload: rs
                    })
                // }, 2000)
            })
        .catch( e => dispatch({
            type: 'LOAD_ALBUMS_FAILED',
            payload: e.message
        }))
    }
}


export const loadPhotos = (albumId) => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_PHOTOS_PENDING'
        })
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_PHOTOS',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_PHOTOS_FAILED',
            payload: e.message
        }))
    }
}

export const loadCountries = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_COUNTRIES_PENDING'
        })
        fetch(`http://localhost:8080/country`)
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_COUNTRIES',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_COUNTRIES_FAILED',
            payload: e.message
        }))
    }
}

export const loadStates = (countryId) => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_STATES_PENDING'
        })
        fetch(`http://localhost:8080/state/${countryId}`)
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_STATES',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_STATES_FAILED',
            payload: e.message
        }))
    }
}