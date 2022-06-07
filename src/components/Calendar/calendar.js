import React from "react";
import  './calendar.css' ;
import * as utils from './utils';

function areEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
};


export default class Calendar extends React.Component {

    static defaultProps = {
        date: new Date(),
        years: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999",
            "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010",
            "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],

        months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր",],
        weekDays: ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"],
        onChange: Function.prototype // Here we need to give a default value for onChange, and Function.prototype
                                    // is perfect for this, a function that does nothing
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null,
    };

    /*creating functionality for buttons*/

    get year() {
        return this.state.date.getFullYear()
    };

    get month() {
        return this.state.date.getMonth()
    };


    previousMonthClick = () => {
        const date = new Date(this.year, this.month - 1); //-1 month from the
        console.log(date);                                    // current position
        this.setState({date});
    };

    nextMonthClick = () => {
        const date = new Date(this.year, this.month + 1); // +1 month from the
        console.log(date);                                     // current position
        this.setState({date});

    };

    renderSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;
        const date = new Date(year, month);
        console.log(date);
        this.setState({date});

    };

   changeSelectedDay = (date) => {
        console.log(date);
        this.setState({selectedDate: date});
        this.props.onChange(date)// for showing that the date was changed
    };


    render() {
        // console.log(currentDay,111)
        // console.log(date,222)
        const {years, months, weekDays} = this.props;
        const { currentDate, selectedDate } = this.state;

        const daysOfMonth = utils.getMonthData(this.year, this.month);


        return (
            <div className='calendar'>

                <header>
                    <button className='previousMonth' onClick={
                        this.previousMonthClick
                    }> {"<< Նախորդ"} </button>

                    <select ref={element => this.monthSelect = element}
                            value={this.month}
                            onChange={this.renderSelectChange}
                            name="months"
                            className='months'>

                        {months.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}

                    </select>

                    <select ref={element => this.yearSelect = element}
                            value={this.year}
                            onChange={this.renderSelectChange}
                            name="years"
                            className='years'>

                        {years.map((year) =>
                            <option key={year} value={year}>{year}</option>
                        )}

                    </select>

                    <button onClick={this.nextMonthClick}
                            className='nextMonth'
                    >{"Հաջորդ >>"}</button>
                </header>

                <table className='table'>
                    <thead>
                    <tr className='weekDays'>
                        {weekDays.map((weekDay) =>
                            <th key={weekDay}>{weekDay}</th>
                        )}
                    </tr>

                    </thead>

                    <tbody className='main'>

                        {daysOfMonth.map((week, index) =>


                            <tr key={index} className='week'>

                                {week.map((date, index) =>{

                                        let today = new Date();
                                      
                                        if(!date){
                                            return <td key={index}/>
                                        }
                                        else{
                                            if( new Date(date).getFullYear() === today.getFullYear() &&
                                                new Date(date).getMonth() === today.getMonth() &&
                                                new Date(date).getDate() === today.getDate()){
                                                return <td key={index} className={"today"} onClick={() => {
                                                    this.changeSelectedDay(date);

                                                }}>
                                                    {date.getDate()}
                                                </td>
                                            } else {
                                                return (<td key={index} className="day" onClick={() => {
                                                    this.changeSelectedDay(date);
                                                }}>
                                                    {date.getDate()}
                                                </td>)
                                            }
                                        }
                                    }
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }

}



