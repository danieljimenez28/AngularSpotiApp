import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;
  error:boolean;
  messageError:string;
  myToken: string;
  constructor(
    private spoty:SpotifyService,
    private tokenServi: TokenService
  ) { 
    this.error = false;


    this.tokenServi.getTokenByActive(true)
        .then((data) => this.myToken = data['token'])
        .catch(err => console.log(err));

    // this.tokenServi.getTokens()
    // .then((data) =>{
    //   this.myToken = data[0].token;
    // });
  }
  
  buscar(termino:string){

    // if(termino.length > 0)
    // {
      this.loading = true;
      this.error = false;
      this.spoty.getArtistas(termino, this.myToken)
          .subscribe( (dat:any) => {
            this.artistas = dat;//.artists.items;
            this.loading = false;
          }, errorServ =>
          {
            this.error = true;
            this.loading = false;
            this.messageError = errorServ.error.error.message;
            this.artistas = [];
          })
    // }
  };
}
