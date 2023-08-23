import React, {useState} from 'react';
import './App.css';
import {ShoppingList} from "./ShoppingList";

export type ListPropsType = {
  id: number
  category: CategoryPropsType
  item: string
  cart: boolean
  filter: FilterPropsType
}

export type FilterPropsType = 'Active' | 'Completed' | 'All'

type CategoryPropsType = 'Household chemicals' | 'Food' | 'Stationery' | 'Other'

const aleksey = {
  age: 38,
  name: 'aleksey'
}

const Aleksey = [aleksey, aleksey, aleksey]


function App() {

  const [list, setList] = useState<Array<ListPropsType>>([
    {id:1, category: 'Household chemicals', item:'washing powder', cart: false, filter: 'Active'},
    {id:2, category: 'Household chemicals', item:'soap', cart: true, filter: 'Completed'},
    {id:3, category: 'Food', item:'Bread', cart: false, filter: 'Active'},
    {id:4, category: 'Food', item: 'Milk', cart: true, filter: 'Completed'},
    {id:5, category: 'Stationery', item: 'Paper for printer', cart: true, filter: 'Completed'},
    {id:6, category: 'Stationery', item:'Notebook', cart: false, filter: 'Active'},
    {id:7, category: 'Other', item: 'Batteries', cart: true, filter: 'Completed'},
    {id:8, category: 'Other', item: 'Light bulb', cart: false, filter: 'Active'}
  ])

  const [filter, setFilter] = useState<FilterPropsType>('All')

  const xxx = () => {}

  const changeFilter = (filter: FilterPropsType) => {setFilter(filter)}

  const copyList = list
  let filtredList = copyList

  if (filter === 'Active') {
     filtredList = copyList.filter((elem) => {
      return (
          elem.filter === 'Active'
      )
    }
    )
  }
  if (filter === 'Completed') {
    filtredList = copyList.filter((elem) => {
      return (
          elem.filter === 'Completed'
      )
    })
  }

  return (
    <div className="App">
        <ShoppingList
            name = 'What to buy'
            list={filtredList}
            changeFilter = {changeFilter}/>
    </div>
  );
}

export default App;
