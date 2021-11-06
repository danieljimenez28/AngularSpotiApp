import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() cancion:any = {};
  constructor(
    private myRouter:Router
  ) { }

  ngOnInit(): void {
  }

  verArtista(item:any){

    let artistaID;

    if(item.type === 'artist'){
      artistaID = item.id;
    }
    else{
      artistaID = item.artists[0].id;
    }
  
    // console.log(artistaID);
    
    this.myRouter.navigate(['/artist', artistaID]);
  }
}
