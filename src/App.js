import React from "react";
import './App.css';
import './index.css';
import Calendar from "./components/Calendar/Calendar";



class App extends React.Component {
    state = {
        date: new Date(),
    };

    showCurrentDate = (date) => {
        return this.setState({date});
    };
    render() {
        const {date} = this.state;

        return (
            <div className="App">

                <h1>Օրացույց</h1>

                {date && <h4>Ձեր ընտրած ամսաթիվը ՝ {date.toLocaleDateString()} </h4>}




                <Calendar onChange ={this.showCurrentDate}/>
            </div>
        );
    }
}

export default App;
