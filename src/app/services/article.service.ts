import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class ArticleService {
  urlArticles = 'http://127.0.0.1:8080/articles/';
 
  constructor(private Http: HttpClient) { }
   listArticles() {
    return this.Http.get(this.urlArticles + 'list');
    }
    deleteArticle(idarticle :any) {
      return this.Http.delete(this.urlArticles + idarticle);
      }
    getArticle(idarticle: any) {
      return this.Http.get(this.urlArticles  + idarticle);
    }
    updateArticle(article: any) {
    return this.Http.put(this.urlArticles + article['id'],article);
    }
    
   createArticle(article:any) {
    return this.Http.post(this.urlArticles+'add/', article);
    }
  }
   
