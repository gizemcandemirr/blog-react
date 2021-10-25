import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

function Details() {

const {id}=useParams()
const[result,setResult]=useState()
const[error, setError]=useState(null)
const[loading,setLoading]=useState(true)


useEffect(() => {
    async function fetchData(){
      setLoading(true)
      try{
        const res= await axios.get(`http://localhost:1337/blogs/${id}`)
        setResult(res.data)
        setLoading(false)
      }
      catch{
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  },[id])
  if(loading) return <p>Loading</p>
  if(error) return <p>Error</p>

    return (
        <div>
                 <div style={{width:"60%", margin:"auto", padding:"20px", marginBottom:"15px", border:"1px solid coral", borderRadius:"10px"}} key={result.id}>
                    <h3> {result.title} </h3>
                     <h5>{result.author}</h5>
                     <p>{result.body}</p>
               </div>
        </div>
    )
}

export default Details
