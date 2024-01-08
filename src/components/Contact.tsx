import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Contact =()=>{
    const [mainData,setMainData]=useState([])
    const[themChange,setThemChange]=useState(false)
    console.log(mainData)

    useEffect(()=>{
        const dataFetching= async ()=>{
            const response=      await  fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data=await  response.json()
            if(data){
                setMainData(data)
            }
        };
        dataFetching()
    },[])

    console.log(themChange)

    return(
        <ContactContainer>
            Content
            <button onClick={()=>setThemChange(prevState => !prevState)}>change Themes</button>
            <ContactBlock>

            {mainData?.map(({id,title})=>{
                return(
                    <Link to={`/contact/${id}`} key={id}>
                        <ContactBlockUnit changeThems={themChange}>
                            <img src="https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            <h3>{title}</h3>
                        </ContactBlockUnit>
                    </Link>
                )
            })}
            </ContactBlock>
        </ContactContainer>
    )
}
export default Contact


const ContactContainer=styled.main`
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
 

`
const ContactBlock=styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: auto;
  gap: 25px;
`
const ContactBlockUnit=styled.div`
  padding: 20px;
  border-radius: 7px;
  //border: 2px solid #f7b0b0;
  border: 2px solid ${({changeThems})=>{
      if(changeThems){
          return 'black'
      }else {
          return '#f7b0b0'
      }
  }};
  background-color: ${props=>props.changeThems?'black':'#f7b0b0'};
  transition: all 400ms ease-in;
  
  &:hover {
    background-color: inherit;
  }
  h3{
    font-size: 14px;
  }
  img{
    width: 100%;
    object-fit: contain;
  }
  
  
  
`
