
import { ArticleService } from '../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles: any;
  constructor(private service: ArticleService, private router: Router) { }
  ngOnInit() {
    this.service.listArticles().subscribe(response => {
      this.articles = response;
    });
  }
    deleteArticle(id :any) {
      //console.log(this.article);
      this.service.deleteArticle(id).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
      })
      }
      refreshListArticles() {
      this.service.listArticles().subscribe(
      response => {
      this.articles = response;
      }
      );
      }
      
      updateArticle(id :any) {
      this.router.navigate(['updateProvider' + '/' + ['id']]);
      }
    }



