import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './compoments/Header';
import LoginPage from './compoments/LoginPage';
import { useEffect, useState } from 'react';
import ThirdStage from './compoments/ThirdStage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SecondStage from './compoments/SecondStage';
import TrainerScreen from './compoments/TrainerScreen';
import WorkoutDeateils from './compoments/WorkoutDeateils';

function App() {
  
  class Trainer{
    constructor(id,fullName,gender){
      this.id=id;
      this.fullName=fullName;
      this.gender = gender;
      this.workOutsPerWeek = 0;
      this.yearsOfTraining = 0;
    }
    setWorks(somenumber){
      this.workOutsPerWeek = somenumber;
    }
    setYears(somenumber){
      this.yearsOfTraining = somenumber;
    }
    
  }
  const [trainerLogIn, setTrainerLogIn] = useState('');
  
  const getUrl = () =>{
    return `/gym-app/training/${trainerLogIn.fullName}`;
  }
  const createTrainer = (id,fullName,gender) =>{
    let trainer = new Trainer(id,fullName,gender);
    setTrainerLogIn(trainer);
  }
  const setWorkouts = () =>{
    let workout1={
      id:1,
      km:(trainerLogIn.yearsOfTraining * 5)/trainerLogIn.workOutsPerWeek,
      success:false
    }
    let workout2 ={
      id:2,
      km:workout1.km * 1.15,
      success:false
    }
    let workout3 = {
      id:3,
      km:workout2.km * 1.15,
      success:false
    }
    let tmpWorkouts = [workout1,workout2,workout3]
    setWorkOuts(tmpWorkouts);
  } 
  const [workoutChosen, setWorkoutChosen] = useState('')
  const [workOuts, setWorkOuts] = useState([])
  
  const setWorkOutSuccess = (id) =>{
    let tmpWorkouts = [...workOuts];
    tmpWorkouts.forEach(w=>{
      if (w.id==id){
        w.success = true;
      }
    })
    setWorkOuts(tmpWorkouts);
  }
  const increaseWorkouts = ()=>{
    for(let i=0;i<workOuts.length;i++){
      workOuts[i].km = workOuts[i].km*1.15;
      workOuts[i].success = false;
    }
  }
  const getWorkoutUrl = () =>{
    return `${getUrl()}/${workoutChosen.id}`
  }

  return (
    <div className="App" style={{direction:"ltr"}}>
      <Router>
        <Header title='gym-app'/>
        <Routes>
          <Route path='/gym-app' element={<LoginPage createTrainer={createTrainer}/>}/>
          <Route path='/gym-app/second-stage' element={<SecondStage trainerLogIn={trainerLogIn} />}/>
          <Route path='/gym-app/third-stage' element={<ThirdStage setWorkouts={setWorkouts} trainerLogIn={trainerLogIn} getUrl={getUrl}  />}/>
          <Route path={getUrl()} element={<TrainerScreen increaseWorkouts={increaseWorkouts} setWorkoutChosen={setWorkoutChosen} getWorkoutUrl={getWorkoutUrl} workOuts={workOuts} trainerLogIn={trainerLogIn} />}/>
          {/* <Route path={getWorkoutUrl()} element={<WorkoutDeateils setWorkoutChosen={setWorkoutChosen} setWorkOutSuccess={setWorkOutSuccess} workoutChosen={workoutChosen} getUrl={getUrl} />}/> */}
          <Route path={`${getUrl()}/1`} element={<WorkoutDeateils setWorkOutSuccess={setWorkOutSuccess} workoutChosen={workOuts[0]} getUrl={getUrl} />}/>
          <Route path={`${getUrl()}/2`} element={<WorkoutDeateils setWorkOutSuccess={setWorkOutSuccess} workoutChosen={workOuts[1]} getUrl={getUrl} />}/>
          <Route path={`${getUrl()}/3`} element={<WorkoutDeateils setWorkOutSuccess={setWorkOutSuccess} workoutChosen={workOuts[2]} getUrl={getUrl} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
