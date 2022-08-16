///////////////
/// ISAIAS ///
/////////////


// import React from 'react';
// import styles from "../styles/Card.module.css";


// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className="card">
//         <div id="closeIcon" className="row">
//             <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Min</p>
//               <p>{min}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Max</p>
//               <p>{max}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };
////////////////////
/// ACABA ISAIAS ///
///////////////////




import React from "react";
import styles from "../styles/Card.module.css";

export default function Card({min, max, name, img, id, onClose}) {
  // acá va tu código
  return (
      <div className={styles.card}>
        <button onClick={onClose} className={`${styles.btn} ${styles.btnColor}`}>X</button> 
        <h3>{name}</h3>
        <div className={styles.middleDiv}>
          <div>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
        <img className={styles.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imégen del Tiempo"></img>
      </div>
  );
}

