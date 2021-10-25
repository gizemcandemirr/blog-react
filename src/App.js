import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/header';
import Details from './pages/details';
import AddBlog from './pages/addBlog';
import Category from './pages/category';
import axios from 'axios'
function App() {

    const[blogs, setBlog]=useState([])
    const[error, setError]=useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(() => {
      async function fetchData(){
        setLoading(true)
        try{
          const result= await axios.get("http://localhost:1337/blogs")
          setBlog(result.data)
          setLoading(false)
        }
        catch{
          setError(error)
          setLoading(false)
        }
      }

      fetchData()
    },[])

  return (
    <div className="App">
     <Router>
       <Header></Header>
      <Switch>
       <Route exact path="/">
         {
           blogs.sort((a,b)=> b.created_at.localeCompare(a.created_at)).map(blog=>{
             return(
               <div style={{width:"60%", margin:"auto", padding:"20px", marginBottom:"15px", border:"1px solid coral", borderRadius:"10px"}} key={blog.id}>
                    <h3> {blog.title} </h3>
                     <h5>{blog.author}</h5>
                     <p>{blog.body.substring(0,70)}...</p>
                <Link to={`/details/${blog.id}`}> <button>Devamı için Tıklayınız</button> </Link>    
               </div>
             )
           })
         }
       </Route>
       <Route path="/details/:id">
         <Details/>
       </Route>
       <Route path="/addblog">
         <AddBlog/>
       </Route>
       
       <Route path="/category/:id">
         <Category/>
       </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
