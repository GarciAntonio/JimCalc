import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  changePage(name:string){
    this.navController.navigateRoot(name)
  }

  constructor(private navController: NavController) {
    
  }

}