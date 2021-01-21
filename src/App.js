import React,{useState} from 'react'
import Forms from './components/Forms'
import {API, KEY} from './Config/Index'
import Output from './components/Output'

export default function App() {

  const [data, setData] = useState([])

  const searchGiphyByName = async (name)=>{
    const response = await fetch(API+name+KEY+'&limit=5')
    const request = await response.json()
    setData(request.data)
  }
  return (
    <div>
      <h1>Giphy</h1>
      <Forms
        search={
          searchGiphyByName
        }
      />
      <Output 
        data ={data}
      />
    </div>
  )
}
