const instagram = new URL( "../../assets/instagram.svg",import.meta.url).href;
const medium = new URL( "../../assets/medium.svg",import.meta.url).href;
const github = new URL( "../../assets/github.svg",import.meta.url).href;


export class AssetConsts{
    public static instance : AssetConsts = new AssetConsts()
    public instagram :string = instagram;
    public medium :string = medium;
    public github :string = github;
}