import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Link, Navigate } from 'react-router-dom';
export default function SecondStage(props) {
    
    const [workOutsPerWeek, setWorkOutsPerWeek] = useState(0);
    const [workOutsYears, setWorkOutsYears] = useState(0);
    const [navToNext, setnavToNext] = useState(false)
    let options1to7 = []
    for (let i=1;i<8;i++){
        options1to7.push({
            value:i,
            label:i
        })
    }
    let options1to30 = []
    for (let i=0;i<31;i++){
        options1to30.push({
            value:i,
            label:i
        })
    }
    const nextBtnFn = () =>{
        // props.setWorks(workOutsPerWeek);
        // props.setYears(workOutsYears);
        setnavToNext(true);
    }
  return (
    <div className='container'>
        <div className='row'>
            <h3>How Many Workouts A Week?</h3>
        </div>
        <div className='row'>
            <Select placeholder='Select Number' onChange={(e)=>props.trainerLogIn.setWorks(e.value)} options={options1to7}/>
        </div>
        <div className='row'>
            <h3>How Many Years Have You Been Traning?</h3>
        </div>
        <div className='row'>
            <Select placeholder='Select Number' onChange={(e)=>props.trainerLogIn.setYears(e.value)} options={options1to30}/>
        </div>
        <div className='row'>
           <button onClick={nextBtnFn} style={{'marginTop':'10px'}}>Next</button>
        </div>
        {navToNext && <Navigate replace to='/gym-app/third-stage'/>}
    </div>
  )
}
