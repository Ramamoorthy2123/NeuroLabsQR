import { useState } from 'react'
import FileUpload from './Components/FileUpload/FileUpload'
import './App.css'
import FileRetrieval from './Components/FileRetrival/FileRetrival'
import DisplayData from './Components/Display data/DisplayData'

function App() {
  

  return (
    <>
    <h1>Neuro-Labs Projects</h1>
  
    <section>
      
    <FileUpload />
    <FileRetrieval />
    <DisplayData  />
    </section>
    </>
  )
}

export default App
