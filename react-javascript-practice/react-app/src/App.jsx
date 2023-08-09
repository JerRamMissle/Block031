//default react component will contain imports at the top, a default export funtion App and a return statement. 
import { useState } from "react"
import "./style.css"

export default function App() {
  //when declaring a new variable it will always be written in this format with a const array[] followed by what value to pass (newItem) and that same variable set as a function (setNewItem) = useState("")
  const [newItem, setNewItem] = useState("")
  // this is the same process only except we are creating an array instead on a string
  const [toDos, setToDos] = useState([])
  //create a new funtion to direct what your add button is going to target

  function handleSubmit(e) {
    //preventDefault function makes it so your page doesnt reload evey time you add an onSubmit form
    console.log(e);
    e.preventDefault()

    setToDos(currentTodos => {
      return [
        ...currentTodos,

        {
          id: crypto.randomUUID(), title: newItem, completed:
            false
        },

      ]
    })
    setNewItem("")
  }
  function toggleToDos(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if (toDos.id === id) {
          return { ...toDos, completed }
        }
        return toDos
      })
    })
  }
  console.log(toDos)
  function deleteToDos(id) {
    setToDos(currentTodos => {
      return currentTodos.filter()
    })
  }
  return (
    <>
      { /* Now that we have out onChange set below we still cant use the actual add button until we make an onSubmit element within the form

    */}
      <form onSubmit={handleSubmit} className="newform">

        <div className="form-row">
          <label htmlFor="item">New Item</label>
          {/* setting the value to new Item will render the test box with whatever the default {useState} string import React, useS tate from 'react';*/}
          {/* In this input tag you must pass its value with curley braces in order to target the useState text box  later.
      In order to have the text box change to whatever you set it to you must make an onChange element that passes an event object(e) through the function setNewItem to again target the textbox.
      Once you have passed the event object through your function you must declare what youre targeting with (e) the event object targeting (e.target)the value (e.target.value
        it is passed as value and not newItem because it attaches the input value as whatever the newItem value is.
        If we did not pass this value the NewItem value would always be blank because our useState string is declared blank at a default.) 
       */}
          <input value={newItem} onChange=
            {e => {
              setNewItem(e.target.value)
              console.log(e)
            }}
            type="text"
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {toDos.map(toDos => {
          return (
            <li key={toDos.id}>
              <label>
                <input type="checkbox" checked={toDos.completed}
                  onChange={e => toggleToDos(toDos.id, e.target.checked)} />

                {toDos.title}
              </label>

              <button className="btn-danger">Delete</button>
            </li>
          )
        })}

      </ul>


    </>

  )
}
