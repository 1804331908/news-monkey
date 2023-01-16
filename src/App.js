
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
       
      <NavBar/>
     
      <Routes>
        <Route exact  path='/news-monkey'  element={<News key="general" pageSize={5} catagory="general"/>}> </Route>
        <Route exact path='/business'  element={<News key="business" pageSize={5} catagory="business"/>}> </Route>
        <Route exact path='/entertainment'  element={<News key="entertainment" pageSize={5} catagory="entertainment"/>}> </Route>
        <Route exact path='/health'  element={<News key="health" pageSize={5} catagory="health"/>}> </Route>
        <Route exact path='/science' element={<News key="science"  pageSize={5} catagory="science"/>}> </Route>
        <Route exact path='/sports'  element={<News key="sports" pageSize={5} catagory="sports"/>}> </Route>
        <Route exact path='/technology'  element={<News key="technology" pageSize={5} catagory="technology"/>}> </Route>
      </Routes>
      
      </div>
    )
  }
}

export default App