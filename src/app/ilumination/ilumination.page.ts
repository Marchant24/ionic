import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ilumination',
  templateUrl: './ilumination.page.html',
  styleUrls: ['./ilumination.page.scss'],
})
export class IluminationPage implements OnInit {
  

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'ROOMS',
      cssClass: 'my-custom-class',
      buttons:[{
        text: 'Room 1',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Kitchen',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }]
    });
    await actionSheet.present();
    const{role, data} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  

}
