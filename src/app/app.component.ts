import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url:'/home', icon:'home'},
    { title: 'Registro', url:'/registro', icon:'file-tray-full'},
    { title: 'Actualizar contraseña', url:'/resetpass', icon:'lock-closed'},
   


  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
