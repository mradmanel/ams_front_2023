import { Component,OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit{
  id:any;
 name:any;
 address:any;
 email:any;
  constructor(private service: ProviderService, private router: Router, private activeRoute: ActivatedRoute ) { }
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
    params => {
    this.id = params.get('id');
    //alert(this.id);
    }
    );
    
    this.service.getProvider(this.id).subscribe(
      (provider:any) => {
      //console.log(response);
               this.name = provider.name;
               this.address = provider.address;
               this.email = provider.email;
              console.log(provider);
            }
      );
          }
      updateProvider()
      {

        let provider={
          "id":this.id,
          "name":this.name,
          "address":this.address,
          "email":this.email
        }
        this.service.updateProvider(provider).subscribe(
          data=>this.router.navigate(["listProvider"])
        );
      }  
  }

