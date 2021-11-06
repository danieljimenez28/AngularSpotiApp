// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [

  ]
})
export class HomeComponent {

  newReleses: any = [];
  loading: boolean;
  error:boolean;
  messageError:string;
  myToken:string;
  constructor(
    // private http: HttpClient
    private spotServ: SpotifyService,
    private tokenServi: TokenService
  ) {
    
    this.tokenServi.getTokenByActive(true)
        .then((data) => this.myToken = data['token'])
        .catch(err => console.log(err));
        
    // this.tokenServi.getTokens()
    //     .then((data) =>{
    //       this.myToken = data[0].token;
    //     });

        setTimeout(() =>{
          this.loading = true;
          this.error = false;
          // console.log(this.myToken);
          this.spotServ.getNewReleses(this.myToken)
          .subscribe( (myData:any) =>{
            
            this.newReleses = myData;//.albums.items;//.categories.items;//.albums.items;
            this.loading = false;
            //console.log(myData);
            //  console.log(this.newReleses);
          }, (errorServ) =>{
            this.error = true;
            this.loading = false;
            this.messageError = errorServ.error.error.message;
            console.log(this.messageError);
          });
        }, 2000);
  }

}
