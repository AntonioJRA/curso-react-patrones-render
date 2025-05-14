import React from "react";

function useStorageListener(synchronize) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en TODOS_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };

// function useStorageListener(WrappedComponent) {
//   return function WrappedComponentWithStorageListener(props) {
//     const [storageChange, setStorageChange] = React.useState(false)

//     window.addEventListener('storage', (change)=> {
//         if (change.key === 'TODOS_V1') {
//             console.log('Hubo cambios en TODOS_V1');
//             setStorageChange(true)
//         }
//     })

//     const toggleShow=()=>{
//         props.synchronize()
//         setStorageChange(false)
//     }
//     return (
//         <WrappedComponent
//             show={storageChange}
//             toggleShow={toggleShow}
//     />
//     );
//   }
// }
