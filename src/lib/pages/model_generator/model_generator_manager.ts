import { CoreManager } from "../../core/manager/core_manager";

export default class ModelGeneratorManager extends CoreManager{
    
    textArea?:HTMLInputElement;
    className?:HTMLInputElement;
    output?:HTMLElement;

    init(){
        this.setNewTitle("Model Generator");
        this.output = (document.getElementsByClassName("outputArea")[0] as HTMLElement)!;
        this.className  = (document.getElementById("modelNameInput") as HTMLInputElement);
        this.textArea = (document.getElementById("modelGeneratorTextArea") as HTMLInputElement);
    }

    clearInputs(){
        this.className!.value= "";
        this.textArea!.value="";
    }

    copyOutput(){
        navigator.clipboard.writeText(this.output!.textContent!);
        this.output!.innerHTML ="Copied";
    }

    updateRowCounter(){
        const counter = document.getElementById("rowCounter");
        const lines:number = this.textArea!.value.split(/\r?\n/).length;
        let numbers:string = "1- <br>";

        for(let i:number = 2; i<=lines;i++){
            numbers = numbers+i +"-" + "<br>"; 
        }
        //Fetch a number to each row in textarea.
        counter!.innerHTML = numbers;
    }

    mapValue(){
        const rawJson:string = (document.getElementById("modelGeneratorTextArea") as HTMLInputElement).value;
        //Try to rawJson variable into JSON object if this process went unsuccess throw a error.
        try {
            const obj:JSON = JSON.parse(rawJson);
            this.output!.innerHTML = this.generateTsObject(obj);
        } catch (error) {
            this.output!.innerHTML="Your JSON editor has syntax error."
        }
    }

    generateTsObject(jsonObject:JSON):string{
        let variables:string =""; 
        let content:string = "";
        let toJsonContent:string = "";
        let fromJsonContent:string = "";
        if(Array.isArray(jsonObject)){
            content = "Array objects can't convert to typescript models.";
        }

        else{
            //Get name of each key
            const keys: (keyof typeof JSON)[] = Object.keys(jsonObject) as (keyof typeof JSON)[];
            keys.forEach((e)=>{
                //Get values of these keys for separating data types
                const value = jsonObject[e];
                //Update "variables" variable
                variables += e.toString() +"!"+":"+(typeof value).toString() + ";<br/>";
                //Update "toJsonContent" variable
                toJsonContent+= `"${e.toString()}":this.${e.toString()},<br/>`;
                //Update "fromJsonContent" variable
                fromJsonContent += `object.${e.toString()} = data["${e.toString()}"];<br/>`;
            });
        }

        //Update content
        content=`
        export default class ${this.className!.value}Dto {
        ${variables}<br/>
        toJson():any{
        return {${toJsonContent}};<br/>
        }<br/><br/>

        static fromJson(data:any):${this.className!.value}Dto{
         const object: ${this.className!.value}Dto = new ${this.className!.value}Dto();
         ${fromJsonContent}
         return object;<br/>
        }<br/><br/>
        }
        `
        return content;
    }
}



    