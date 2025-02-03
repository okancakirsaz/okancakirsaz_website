export abstract class CoreManager{
    navigate(pageName:string){
        window.location.href = "/"+pageName;
    }
}