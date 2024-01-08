import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const User=()=>{
    const[data,setData]=useState({})
    const {id}=useParams() //get path variable id Routes
    console.log(id)
    console.log(data)

    useEffect(()=>{
        const getData= async ()=>{
          const response=      await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
           const data=await  response.json()
            if(data){
                setData(data)
            }
        }

        getData();

        return()=>{
            getData();
        }
    },[id])

    return(
        <div>
            <h1>User Page</h1>
            {data?(<div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>):null}
            <Link to={"/contact"}>Back</Link>
        </div>
    )
}
export default User
