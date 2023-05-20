import { Component } from '@angular/core';
import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

titre:string="Ajouter Nouveau Article";

constructor(private service: ArticleService, private router: Router) { }


imgPLus:string="https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg";

persistArticle(article:any){
  //console.log(data);
 this.service.createArticle(article).subscribe(data=>
   {
      this.router.navigate(['listArticle']);
   }
 );
 
 
}

}