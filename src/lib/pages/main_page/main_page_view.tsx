import BlogPreview from "../../core/components/blog_preview/blog_preview";
import Welcome from "./components/welcome/welcome";
import "./main_page_view.css";
import AboutMePart from './components/about_me/about_me_part';
import CustomSpecialButton from "../../core/components/custom_special_button/custom_special_button";
import { MainPageManager } from './main_page_manager';

export default function MainPageView(){
const manager:MainPageManager = new MainPageManager();
return (
<>
<section className="mainSection">
<section className="welcomeSection">
<Welcome manager={manager}></Welcome>
</section>
<section className="blogSection">
<div className="sectionTitle"><span>Blogs</span><a className="blogsButton" href="/blogs">See All</a></div>
<div className="blogPreviews">
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
</div>
</section>

<section className="aboutMeSection">
<div className="sectionTitle">About Me</div>
<AboutMePart colorCode="#015D1F" text="Little bit asocial" src="/bitmoji/asocial.svg" direction="ltr"></AboutMePart>
<AboutMePart colorCode="#2483F6" text="Always organized" src="/bitmoji/planned.svg" direction="rtl"></AboutMePart>
<AboutMePart colorCode="#B36F41" text="Creative and analytic person" src="/bitmoji/creative.svg" direction="ltr"></AboutMePart>
<AboutMePart colorCode="#4C383B" text="Cat owner" src="/bitmoji/cat.svg" direction="rtl"></AboutMePart>
<AboutMePart colorCode="#EA5D42" text="Amateur guitar player" src="/bitmoji/guitarist.svg" direction="ltr"></AboutMePart>

</section>

<section className="bottomNavBar">
    <CustomSpecialButton text="Games" onClick={()=>{}}></CustomSpecialButton>
    <CustomSpecialButton text="My Rick&Morty Fan Arts" onClick={()=>{}}></CustomSpecialButton>
    <CustomSpecialButton text="Memory Gallery" onClick={()=>{}}></CustomSpecialButton>
    <CustomSpecialButton text="My Resume" onClick={()=>{}}></CustomSpecialButton>
</section>

</section>

</>
);
}