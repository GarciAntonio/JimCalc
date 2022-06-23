import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart,Point,registerables} from 'chart.js'
Chart.register(...registerables)
@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  @ViewChild('myChart') lineChart: any
  graph: any
  labels: number[] = [1, 2, 3, 4, 5]
  speedData: number[] = [42, 69, 420, 666, 8008]
  changePage(name:string){
    this.navController.navigateRoot(name)
  }

  constructor(private navController: NavController) {
    
  }
  createChart(){
   this.graph = new Chart(this.lineChart.nativeElement, {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [{
        label: "speed vs time",
        data: this.speedData,
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(38,194,129)",
        borderWidth: 1
      }]
    }
   })
  }
  ngAfterViewInit(){
    this.createChart()
  }

}