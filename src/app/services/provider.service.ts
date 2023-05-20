import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class ProviderService  {
  urlProviders = 'http://127.0.0.1:8080/providers/';
 
  constructor(private Http: HttpClient) { }
  listProviders() {
    return this.Http.get(this.urlProviders + 'list');
    }
    deleteProvider( idprovider: any ) {
      return this.Http.delete(this.urlProviders + idprovider);
      }
   createProvider(provider: any) {
    return this.Http.post(this.urlProviders+'add/', provider);
    }
    
    updateProvider(provider: any) {
    return this.Http.put(this.urlProviders + provider['id'],provider);
    }
    
    getProvider( id: any) {
    return this.Http.get(this.urlProviders + id);
  }
}