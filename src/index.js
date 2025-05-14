import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// function App(props){
//   return <h1>¡{props.saludo}, {props.nombre}!</h1>
// }

// function withSaludo(WrappedComponent){
//   return function WrappedComponentWithSaludo(saludo){
//     return function ComponenteDeVerdad(props){
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Acompaño al HOC</p>
//         </React.Fragment>
//       )
//     }
//   }
// }

// const AppWithSaludo = withSaludo(App)('Aló')

ReactDOM.render(
  <App />,
  // <AppWithSaludo nombre="Tony" />,
  document.getElementById('root')
);
