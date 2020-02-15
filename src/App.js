import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div>
            <NavBar/>
            <About/>
            <Projects/>
            </div>
        );
    }
}

export default App;