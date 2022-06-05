import React from "react";
import style from './calendar.module.css' ;


export default class Calendar extends React.Component  {

    static defaultProps = {
        years:["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999",
            "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010",
            "2011", "2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"],

        months:["Հունվար" , "Փետրվար", "Մարտ" , "Ապրիլ" , "Մայիս" , "Հունիս" , "Հուլիս" , "Օգոստոս" , "Սեպտեմբեր" , "Հոկտեմբեր" , "Նոյեմբեր" , "Դեկտեմբեր" , ],
        weekDays:["Երկ", "Երք", "Չրք","Հնգ", "Ուրբ","Շբթ","Կիր"],
    }
    render(){

        const {years, months, weekDays}=this.props;

        return (
            <div className={style.calendar} >

                <header>
                    <button className={style.previousMonth}>Նախորդ ամիս</button>

                    <select name="months" className={style.months}>
                        {months.map((name, ind)=>
                            <option key={name} value={ind}>{name}</option>
                        )}

                    </select>

                    <select name="years" className={style.years}>

                        {years.map((year)=>
                            <option key={year} value={year}>{year}</option>
                        )}

                    </select>

                    <button className={style.nextMonth}>Հաջորդ ամիս</button>
                </header>

                <table >
                    <thead>
                        <tr>
                            {weekDays.map((weekDays)=>
                                <th key={weekDays} >{weekDays}</th>
                            )}
                        </tr>

                    </thead>

                    <tbody>

                    </tbody>
                </table>


            </div>
        )
    }

}



