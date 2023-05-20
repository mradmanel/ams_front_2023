import { Component } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router } from '@angular/router';
@Component(
  {
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {
  public titre:string="Add nouveau Provider";
  constructor(private service: ProviderService, private router : Router) { }
  imgPLus:string="https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg" 
    formation:string="Angular";
   persistProvider(provider:any){
      //console.log(data);
    this.service.createProvider(provider).subscribe(
      data => {
        this.router.navigate(['listProvider']);
             }
       );  
    }

      }    

    