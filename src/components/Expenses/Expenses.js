import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {

        setFilteredYear(selectedYear);
        console.log(selectedYear)

    };

    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear)
    });

    let expensesContent = <p>Nothing happend this year. </p>;

    filteredExpenses.length > 0 &&
        (expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />)))


    return (
        <div>


            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}




            </Card>
        </div>



    );
}

export default Expenses;