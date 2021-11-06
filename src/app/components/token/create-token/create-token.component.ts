import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private tokenServ:TokenService,
    private route:Router
  ) { }

  tokens:any[] = [];
  form:FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      token:['', {
        validators:[Validators.required, Validators.minLength(30)]
      }]
    });

        this.tokenServ.getTokens()
        .then((data) =>{
          // console.log(data);
          this.tokens = data;
        })
        .catch(err => console.log(err));
  }

  getErrorCampoToken(){
    let campoTok = this.form.get('token');

    if(campoTok.hasError('required'))
    {
      return 'El Token es requerido';
    }
    if(campoTok.hasError('minlength'))
    {
      return 'El minimo de caracteres son 30 letras';
    }

    return '';
  }
  guargarToken(){

    let token ={
      token: this.form.value.token
    };

    this.tokenServ.setToken(token)
    .then((dat) => {
      this.route.navigate(['/home']);
    });

    // console.log(this.form.value.token);
  }

}
