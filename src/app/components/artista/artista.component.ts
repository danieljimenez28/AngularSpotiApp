import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  myArtista:any = {};
  topTracks:any[] =[];
  artistaId:string;
  loading:boolean;
  error:boolean;
  messageError:string;
  myToken: string
  constructor(
    private actRoute:ActivatedRoute,
    private spoService: SpotifyService,
    private tokenServi: TokenService
  ) {
    this.loading = true;
    this.error = false;

    this.actRoute.params.subscribe( par => this.artistaId = par['id']);

    this.tokenServi.getTokenByActive(true)
        .then((data) => this.myToken = data['token'])
        .catch(err => console.log(err));
        
    // this.tokenServi.getTokens()
    // .then((data) =>{
    //   this.myToken = data[0].token;
    // });

    setTimeout(() => {
      this.getArtista(this.artistaId);
      this.getTopTracks(this.artistaId);
    }, 2000);
  }

  getArtista(id:string){
    this.spoService.getArtista(id, this.myToken)
          .subscribe( dat => {
            //console.log(dat);
            this.myArtista = dat;
            this.loading = false;
          }, errorServ =>
          {
            console.log(errorServ.error.error.message);
            this.error = true;
            this.loading = false;
            this.messageError = errorServ.error.error.message;
            this.myArtista = [];
          });
  }

  getTopTracks(id:string){
    this.spoService.getArtistaTopTracks(id, this.myToken)
    .subscribe( dat => {
      this.topTracks = dat;
      this.loading = false;
      this.error = false;
    }, errorServ =>
    {
      this.error = true;
      this.loading = false;
      this.messageError = errorServ.error.error.message;
    });
  }
}
