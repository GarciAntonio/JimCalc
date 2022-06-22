import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  changePage(name:string){
    this.navController.navigateRoot(name)
  }

  constructor(private navController: NavController) {
    
  }

}