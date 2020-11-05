import React, { useContext } from 'react';

const AppContext = React.createContext()

function Message () {
    const {userName} = useContext(AppContext)
    return (
        <div>
            <p>Message中的userName是: {userName}</p>
        </div>
    )
}


function NavBar () {
    const { userName } = useContext(AppContext)
    return (
        <div>
            <p>NavBar中的userName是：{userName}</p>
        </div>
    )
}


export function UseContextDemo () {
    return (
        <AppContext.Provider value={{userName: 'javaswing'}}>
            <NavBar/>
            <Message/>
        </AppContext.Provider>
    )
}


