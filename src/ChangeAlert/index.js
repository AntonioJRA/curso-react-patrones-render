import React from 'react'
import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ synchronize }){
    const { show, toggleShow} = useStorageListener(synchronize)
    if (show) {
        return (
            <div className='change-btn'>
                <p>Ha habido cambios en la aplicación. ¿Quiere recargar los datos?</p>
                <button
                onClick={()=>toggleShow(false)}
                className='change-alert'>
                    Volver a cargar la información
                </button>
            </div>
        )
    } else {
        return null
    }
}

export { ChangeAlert}

/*
function ChangeAlert({ show, toggleShow}){
    if (show) {
        return (
            <div className='change-btn'>
                <p>Ha habido cambios en la aplicación. ¿Quiere recargar los datos?</p>
                <button
                onClick={()=>toggleShow(false)}
                className='change-alert'>
                    Volver a cargar la información
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener}
*/ 