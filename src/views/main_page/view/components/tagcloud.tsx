
import TagCloud from 'TagCloud';
import { MainController } from '../../controller/main_controller';
import '../../style/main_view_style.css'
import { useEffect } from 'react';

export default function CustomTagCloud({controller}:{controller:MainController}) {
useEffect(()=>{
    const element:Element[] =Array.prototype.slice.call( document.querySelectorAll(".tagcloud"));
TagCloud(element,controller.abilities,controller.tagCloudOptions)
})
  return (
    <div className="tagcloud">
      </div>
  );
}