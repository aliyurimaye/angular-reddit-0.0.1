export class Article{
    title: string;
    link:string;
    votes :number;

    constructor(title :string,link :string, votes?:number){
        this.title=title;
        this.link=link;
        this.votes=votes||0;
    }

    voteUp():void{
        this.votes+=1;
    
      }
    
      voteDown():void{
        this.votes-=1;
      }


      domain():string{
        try{
          const domainPath:string=this.link.split('//')[1];
          return domainPath.split('/')[0];
        }catch(er){
          return er;
        }
      }

}