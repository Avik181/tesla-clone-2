import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {

    return (
        <Wrap style={{ backgroundImage: `url(${backgroundImg})`}} >
        <Fade bottom>
            <ItemText>
                <b><h1>{title}</h1></b>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && 
                    <RightButton>
                    {rightBtnText}
                </RightButton>
                }
                
            </ButtonGroup>
            </Fade>

            <DownArrow src="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/down-arrow.svg" />
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 ${'' /* background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop'); */}
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 ${'' /* background-image: ${props => `url("images/${props.bgImage}")` } */}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    padding-bottom: 8px;
}
`

const ButtonGroup = styled.div`
 display: flex;
 margin-bottom: 30px;
 @media (max-width: 768px){
     flex-direction: column;
 }
`

const LeftButton = styled.div`
 background-color: rgba(23, 26,32,0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items:center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size:14px;
 cursor: pointer;
 margin: 14px;
`

const RightButton = styled(LeftButton)`
 background-color: white;
 opacity: 0.65;
 color: black;
`

const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`

