export abstract class CoreManager{

    setNewTitle(text?:string){
       document.title = text ?? "Welcome!";
    }

    navigate(pageName:string){
        window.location.href = "/"+pageName;
    }
}