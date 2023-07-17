import React, { useState } from "react";
import { HeaderComponent } from "../components/headerComponent";
import { HeroComponent } from "../components/content/heroComponent";
import { SkillBarComponent } from "../components/content/skillbarComponent";
import { OtherComponent } from "../components/content/otherComponent";
import { ProjectComponent } from "../components/content/projectComponent";
import { FooterComponent } from "../components/footerComponent";
import { AboutComponent } from "../components/content/aboutComponent";

export function Home(){

    const [statusNavbar,setStatusNavbar] = useState(false);


    const changeBackground = () =>{
        if (window.scrollY >= 20) {
            setStatusNavbar(true);
        }
        else {
            setStatusNavbar(false);    
        } 
    }
    window.addEventListener('scroll', changeBackground);
    console.log(statusNavbar);

    return(
        <>
        <HeaderComponent status={statusNavbar}/>
        <HeroComponent/>
        <AboutComponent/>
        <SkillBarComponent/>
        <br/>
        <br/>
        <ProjectComponent/>
        <OtherComponent/>
        <FooterComponent/>
        </>
    )
}