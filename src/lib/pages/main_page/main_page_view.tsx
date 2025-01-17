import BlogPreview from "../../core/components/blog_preview/blog_preview";
import Welcome from "./components/welcome/welcome";
import "./main_page_view.css";

export default function MainPageView(){
return (
<>
<section className="mainSection">
<Welcome></Welcome>
<section className="blogSection">
<div className="blogTitle"><span>Blogs</span><a className="blogsButton" href="/blogs">See All</a></div>
<div className="blogPreviews">
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
<BlogPreview></BlogPreview>
</div>
</section>

<section className="aboutMeSection">
    ABOUT ME
</section>

</section>

</>
);
}