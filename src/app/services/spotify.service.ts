import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'  // Reactive Extentions
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http:HttpClient,
    private tokenServi:TokenService
  ) { 
    //  console.log(' Spoty Listo para usar');
  }

  getQuery(query:string, token:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    
        const headers = new HttpHeaders({
          'Authorization':`Bearer ${token}`
        });
        
        return this.http.get(url, { headers });
  }

  getNewReleses(token:string){
    return this.getQuery('browse/new-releases?limit=20', token)
                .pipe( map( dat => dat['albums'].items));

    //return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, { headers })
    //           .pipe( map( dat => {
    //             return dat['albums'].items;
    //           }));
  }

  getArtistas(termino:string, token:string){
    let limit = 20;
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=${ limit }`, token)
                .pipe( map( dat => dat['artists'].items ));
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=${ limit }`, { headers })
    //             .pipe( map( dat => dat['artists'].items ));    
  }

  getArtista(id:string, token:string){
    // console.log(`Termino der serv ${id}`);
    //  	https://api.spotify.com/v1/artists/{id}
    return this.getQuery(`artists/${ id }`, token);
              //.pipe( map( dat => dat ));
  }

  getArtistaTopTracks(id:string, token:string){
    // console.log(`Termino der serv ${id}`);
    return this.getQuery(`artists/${ id }/top-tracks?country=us`, token)
              .pipe( map( dat => dat['tracks'] ));
  }
}
