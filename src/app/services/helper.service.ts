import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private aleertService:AlertController) { }
  async showAlert(msg:string,title:string){
    var alert= await this.aleertService.create({cssClass:"alertClass",
    header:title,
    message:msg,
    buttons:["Aceptar"]})
    await alert.present();
    return alert;
  }
}
