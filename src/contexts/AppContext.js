'use client'
import { useState, useContext, createContext } from "react";

const AppContext = createContext(); 

//va a englobar toda la aplicacion
export const AppContextProvider = (children) => {

    const [favoritos, setFavoritos] = useState([])

    //aca metemos toda la logica que necesitemos

    const favoritosQty = () => favoritos.length

    const handleAddFavorite = (data) => {
        setFavoritos([...favoritos, data])
    }

    return (
        //va a exportar un componente que se llama app context y utiliza el metodo provider
        //value son las cosas que queres dejar publicas y exportar
        <AppContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </AppContext.Provider>
    )
}

//el hook
export const useAppContext = () => {
    const context = useContext(AppContext);

    //el context no se puede usar por fuera del provider
    //si no hay context tirame un error
    if (!context){
        throw new Error ('useAppContext solo puede ser usado dentro del provider')
    }

    return context
}

export default AppContext