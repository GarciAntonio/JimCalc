import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  changePage(name:string){
    this.navController.navigateRoot(name)
  }

  constructor(private navController: NavController) {

  }

}
