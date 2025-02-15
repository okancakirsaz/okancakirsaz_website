export default class ModelGeneratorManager{
    
    output?:HTMLElement;

    init(){
        this.output = (document.getElementsByClassName("modelGeneratorOutput")[0] as HTMLElement)!;
    }

    updateRowCounter(){
        const textArea = (document.getElementById("modelGeneratorTextArea") as HTMLInputElement);
        const counter = document.getElementById("rowCounter");
        const lines:number = textArea!.value.split(/\r?\n/).length;
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
        const className:string = (document.getElementById("modelNameInput") as HTMLInputElement).value;
        let variables:string =""; 
        let content:string = ""
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
                variables += e.toString() +":"+(typeof value).toString() + ";<br/>";
            });
        }

        //Update content
        content=`
        export default class ${className} {
        ${variables}\n
        }
        `
        //TODO: Add toJson and fromJson methods
        return content;
    }
}