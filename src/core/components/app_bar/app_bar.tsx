import { useEffect } from 'react';
import "./app_bar.css";
import AppBarLink from './components/app_bar_link';
import LinkBarLink from './components/link_bar_link';
import { AssetConsts } from '../../const/asset_const';

export const AppBar = () => {


  useEffect(() => {});

  return (
    
    <section id='allTopBarContainer'>
    <img src="https://miro.medium.com/v2/resize:fit:2400/1*DDg8R8qDq26b-jzIlbJNqg.png" alt="me" id='avatar'/>
    <nav id='appBarContainer'> 
      <AppBarLink text="Blog" route="/blog"/>
      <AppBarLink text="Work With Me" route="/work-with-me"/>
      <AppBarLink text="My Works" route="/my-works"/>
    </nav>
    <nav id='linkBarContainer'>
    <LinkBarLink route='https://medium.com/@ocakirsaz' icon={AssetConsts.instance.medium}/>
    <LinkBarLink route='https://www.instagram.com/ismetokan.exe/' icon={AssetConsts.instance.instagram}/>
    <LinkBarLink route='https://github.com/okancakirsaz' icon={AssetConsts.instance.github}/>
    </nav>
    </section>
    
  );
};