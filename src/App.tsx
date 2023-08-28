
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Welcome from './components/Welcome';
// import Greet from './components/Greet';

function App() {
  // const personName={
  //   first:"Bruce",
  //   last:"Wayne"
  // }
  // const nameList=[
  //   {
  //     first:"Bruce",
  //     last:"Wayne"
  //   },
  //   {
  //     first:"Clark",
  //     last:"Kent"
  //   },
  //   {
  //     first:"Princess",
  //     last:"Diana"
  //   } 
  // ]
  return (
    <div className="App">
     {/* <Greet name='Priya' messageCount={10} isLoggedIn={true}/> */}
     {/* <Person name={personName}/>
     <PersonList names={nameList}/>
     <Welcome sname='Ridhan' age={9}/> */}
     <Status status='success'/>
    </div>
  );
}

export default App;
