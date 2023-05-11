import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import {PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [{ path: "", pathMatch: "full", redirectTo: "app-navbar" },//127.0.0.1:4200/providers
{ path: "listProvider", component: ListProviderComponent },
{ path: "addProvider", component: AddProviderComponent },
{ path: "updateProvider/:id", component: UpdateProviderComponent },
{ path: "listArticle", component: ListArticleComponent },
{ path: "addArticle", component: AddArticleComponent },
{ path: "updateArticle/:id", component: UpdateArticleComponent },
{path: '**', component: PageNotFoundComponentComponent},]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
