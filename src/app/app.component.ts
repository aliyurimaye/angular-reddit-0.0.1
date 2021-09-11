import { Component } from '@angular/core';
import { Article } from 'src/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   articles:Article[];

  constructor(){
this.articles=[
new Article('Angular','http://angular.io',3),
new Article('Fullstack','http://fullstack.io',2),
new Article('Angular Hompage','http://angular.io',1)
]
  }

  addArticle(newTitle:HTMLInputElement,newLink:HTMLInputElement){
    console.log(`title name: ${newTitle.value}, link name: ${newLink.value}`);
    this.articles.push(new Article(newTitle.value,newLink.value,0));
    newTitle.value='';
    newLink.value='';
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}
