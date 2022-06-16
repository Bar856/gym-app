import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Workout(props) {
    const [goToWorkout, setGoToWorkout] = useState(false)
    const goToWorkOutBtn = () =>{
      props.setWorkoutChosen(props.workout)
      setGoToWorkout(true)
    }
  return (
    <div className='row '>
        <button style={{'marginTop':'10px'}} disabled={props.workout.success ? true : false} onClick={goToWorkOutBtn}>Workout N.O {props.workout.id} <br/>{Number((props.workout.km).toFixed(1))} KM</button>
        {goToWorkout && <Navigate replace to={props.getWorkoutUrl()}/>}
    </div>

  )
}
