import React, {useState} from 'react'
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/carSlice/carSlice";
import {useSelector} from "react-redux";


function Header() {

    const [menuToggle, setMenuToggle] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/logo.svg" alt="logo" />
            </a>

            <Menu>
            {cars && cars.map((car, index)=>(
                <a key={index} href="#">{car}</a>
            ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <a href="#" onClick={()=>setMenuToggle(true)}>Menu</a>
            </RightMenu>
            <RightNavMenu show={menuToggle}>
                <AlignWrap>
                <CrossBtn onClick={()=>setMenuToggle(false)}/>
                </AlignWrap>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panel</a></li>
                <li>
                <a href="#">Existing Inventory</a>
                </li>
                <li>
                <a href="#">Used Inventory</a>
                </li>
                <li>
                <a href="#">Trade In</a>
                </li>
                <li>
                <a href="#">Cyber Truck</a>
                </li>
                <li>
                <a href="#">Roadster</a>
                </li>
                <li>
                <a href="#">Semi</a>
                </li>
                <li>
                <a href="#">Charging</a>
                </li>
                <li>
                <a href="#">PowerWall</a>
                </li>
            </RightNavMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 150px;
    a {
        font-family: "Montserrat";
        font-weight: 400;
        text-decoration: none;
        text-transform: none;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
    
`
const RightMenu = styled.div`

    display: flex;
    align-items: center;
    a {
        font-family: "Montserrat";
        font-weight: 400;
        text-decoration: none;
        padding: 0 10px;
        flex-wrap: nowrap;
        margin-right: 10px;
    }
`
const RightNavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform  0.2s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);

        a{
            font-weight: 600;
        }
    }
`

const CrossBtn= styled(CloseIcon)`
    cursor: pointer;
`
const AlignWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`