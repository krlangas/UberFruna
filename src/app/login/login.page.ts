import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  contrasena: string = '';
  hideMenu: boolean=false;
  constructor(
    private router: Router,
    private helperService:HelperService) {}

  ngOnInit() {
    const curretRoute=this.router.url;//obtener ruta
    //verificar la ruta de inicio de sesion
    if(curretRoute ==='/login'){
      this.hideMenu=true;
    }
  }

  login() {
    if (this.email == '') {
      this.helperService.showAlert("Ingrese un email","Error");
      //alert('Debe ingresar un email.');
      return;
    }
    if (this.contrasena == '') {
      this.helperService.showAlert("Ingrese una contraseña","Error");
      //alert('Debe ingresar una contraseña.');
      return;
    }

    if (this.email == 'kev' && this.contrasena == '123') {
      //alert("Login correcto.");
      this.router.navigateByUrl('/home');
    } else {
      this.helperService.showAlert("El email o el correo son incorrectos","Error");
      //alert('Crdeneciales no validas.');
    }
    
  }
}
