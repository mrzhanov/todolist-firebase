import React, { useEffect, useState } from 'react'
import './App.css'
import { db } from './firebase.config'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
const App = () => {
  const [text,settext] = useState('')
  const [state,setstate] = useState([])
  const todolistCollectionRef = collection(db,'todolist')
  const getTodolist = async() =>{
    try {
      const data = await getDocs(todolistCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),id:doc.id,
      }))
      setstate(filteredData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTodolist()
  }, [])
  
  const handleCreateCard =  async() => {
    const data = await addDoc(todolistCollectionRef,{text,time:new Date().toISOString()})
    
    getTodolist()
  }
  const onDoubleClicks = (e) => {
    console.log(e.target.classList.toggle('active'));

  }
  const clearhandle =() =>{
    settext('')
  }
  const onDeleteHandle = async(id) =>{
    const todolistDoc = doc(db,'todolist',id)
    await deleteDoc(todolistDoc)
    getTodolist()

  }
  return (
    <div>
      <div className="container">
        <div className="todoApp">
          <input value={text} type="text" onChange={(e) => settext(e.target.value)} />
           <button onClick={handleCreateCard} className='createBtn'>Create</button>
           <button onClick={clearhandle} className='createBtn'>Clear</button>
        </div>
      </div>
    <div className='carditems'>
        {state && state.map(item => (
          <div onDoubleClick={onDoubleClicks} className='card'>
            {item.text}
            {item.time}
            <button onClick={() => onDeleteHandle(item.id)} className='deletebtn'>Delete</button>
          </div>
        ))}
        </div>
    </div>
  )
}

export default App