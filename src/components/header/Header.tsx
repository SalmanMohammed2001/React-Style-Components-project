import  closeMenu from '../image/close-md-svgrepo-com.svg'
import {useState} from "react";
import  menu from '../image/menu-svgrepo-com.svg'

import styled from "styled-components";
import {Link} from "react-router-dom";
const Header=()=>{
    // const [menuClick,setMenuClick]=useState(false);


    return(
        <HeaderContainer>
            <HeaderLeft>
                <h1>AUK <span>DEV</span></h1>
            </HeaderLeft>

            <HeaderRight>
                <img src={menu} alt="menu" />
                <ul>
                    <li> Home</li>
                  <li>About</li>
                    <li> Contact</li>
                    <li>Project</li>
                </ul>
            </HeaderRight>

        </HeaderContainer>
    )
}





export default Header

const HeaderContainer=styled.header`
  padding: 14px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const HeaderLeft=styled.section`

`
const HeaderRight=styled.nav`
    position: relative;
  
  img{
    width: 27px;
    object-fit: contain;
  }
    

`
