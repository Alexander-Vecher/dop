import React from 'react';
import {FilterPropsType, ListPropsType} from "./App";

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
export type ShoppingListPropsType = {
    name: string
    list: ListPropsType[]
    changeFilter: (filter: FilterPropsType) => void
}

export const ShoppingList = (props: ShoppingListPropsType) => {

    // props.changeFilter(filter: FilterPropsType) =  const changeFilter = (filter: FilterPropsType) => {alert('Мы МОЛОДЦЫ!')}

    return (
        <div>

            <h1>
                {props.name}
            </h1>
            <div>
                <input/>
                <button>+</button>
            </div>

            {props.list.map((e) => {
                return (
                    <ol>
                        <h3>{e.category}
                            <button>x</button>
                        </h3>
                        <li> <input type='checkbox' checked={e.cart} />
                            {e.item}</li>
                    </ol>
                )
            })}
            <div>
                <button onClick={() => props.changeFilter('All')}>All</button>
                <button onClick={() => props.changeFilter('Active')}>Active</button>
                <button onClick={() => props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
};