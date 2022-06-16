import React from 'react';
import { useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
export default function WorkoutDeateils(props) {
    

    const [goToHome, setGoToHome] = useState(false)
    const successBtn = () =>{
      props.setWorkOutSuccess(props.workoutChosen.id);
      setGoToHome(true);
    }
    const failurBtn = () =>{
      setGoToHome(true);
    }
  return (
    <div className='container'>
      <div className='row margeTen'>
        <h1>  {`${Number((props.workoutChosen.km).toFixed(1))} KM`}</h1>
      </div>
      <div className='row margeTen'>
        <h1>workout: {props.workoutChosen.id}</h1>
      </div>
      <div className='row margeTen'>
        <button onClick={successBtn}>Success</button>
      </div>
      <div className='row margeTen'>
        <button onClick={failurBtn} >Failure</button>
      </div>
        {goToHome && <Navigate replace to={props.getUrl()}/>}
    </div>

  )
}
