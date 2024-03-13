import '../style/work_with_me_style.css'
import { useEffect } from "react";
import { AppBar } from "../../../core/components/app_bar/app_bar";
import { BottomBar } from "../../../core/components/bottom_bar/bottom_bar";
import { WorkWithMeController } from '../controller/work_with_me_controller';
import { Typewriter } from 'react-simple-typewriter';
import { CustomButton } from '../../../core/components/custom_button/custom_button';

export default function WorkWithMeView() {
  const controller:WorkWithMeController = new WorkWithMeController();
  useEffect(()=>{
    controller.init();
  });
  return (
    <>
    <AppBar/>
    <section id='hireRow'>
    <div id='hireInformation'>
    <h3 className='title'>What Can I Do</h3>
    <Typewriter 
    words={[`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`]}
    loop={1}
    cursor
    cursorStyle='_'
    typeSpeed={10}
    delaySpeed={1000}
    />
    </div>
    <div id='paymentInfoContainer'>
    <section id='workSystemContainer'>
    <div className='titlePaymentInfo'>Work Process</div>
     <div className='description'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
     </div>
    </section>
    <section id='paymentMethodsContainer'>
    <div className='titlePaymentInfo'>Payment Methods</div>
     <div className='description'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
     </div>
    </section>
    <section id='buttonContainer'>
    <CustomButton text='Work With Me' onPressed={()=>{}} id='workWithMeBtn'/>
    </section>
    </div>
    </section>
    <BottomBar/>
    </>
  );
}