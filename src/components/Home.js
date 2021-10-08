import React from 'react';
import styled from "styled-components";
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"

            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof "
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="https://runcloudset1.nyc3.digitaloceanspaces.com/Avik-Files/Images/accessories.jpg"
                leftBtnText="Shop now"
                rightBtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
 height: 100vh;
`
