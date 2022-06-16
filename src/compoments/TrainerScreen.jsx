import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import Workout from './Workout';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function TrainerScreen(props) {
  
  const checkForAllSuccess = () =>{
    let counter = 0;
    for (let i=0;i<props.workOuts.length;i++){
      if (props.workOuts[i].success){
        counter++;
      }
    }
    if (counter === 3){
      props.increaseWorkouts()
    }
  }
  const goToNextWorkout = () =>{
    for (let i=0;i<props.workOuts.length;i++){
      if (!(props.workOuts[i].success)){
        props.setWorkoutChosen(props.workOuts[i]);
        break
      }
    }
  }
  const btnBtnFn = () =>{
    setNavToWorkout(true);

  }
  useEffect(()=>{
    checkForAllSuccess();
    goToNextWorkout();
  })

  

  const [navToWorkout, setNavToWorkout] = useState(false)
  
  const startBtnFn = () =>{
    goToNextWorkout()
  }
  return (
    <div className='container'>
        <div className='row '>
            <h1 className='border'>Welcome {props.trainerLogIn.fullName}</h1>
        </div>
        <div className='row '>
          <button onClick={btnBtnFn}>Start </button>
        </div>
        {
          props.workOuts.map((w,i)=>{
            return <Workout setWorkoutChosen={props.setWorkoutChosen} getWorkoutUrl={props.getWorkoutUrl} key={i} workout={w}/>
          })
        }
        {navToWorkout && <Navigate replace to={props.getWorkoutUrl()}/>}

    </div>
  )
}
