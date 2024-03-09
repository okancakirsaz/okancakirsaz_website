import { BaseController } from "../../../core/base/base_controller";

export class MainController extends BaseController {
  init(): void {
    super.init();
  }

  abilities: string[] = [
    "Flutter",
    "React",
    "VanillaJs",
    "Firebase",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "Python",
    "Kotlin",
    "Rest API",
    "Dart",
    "UI design",  
    "UX design",
    "Managing Network Systems",
  ];


  getTagCloudSize():number{
    const screenSize:number = window.screen.width;

    if(screenSize<=1024){
     return 170;
    }
    else {
      return 300;
    }
   

  }

  tagCloudOptions = {
    radius:this.getTagCloudSize(),
    keep: true,
  };

}
