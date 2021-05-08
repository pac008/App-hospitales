import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
})
export class Grafica1Component {
 
  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data1 = [
    [100, 450, 300],
  ];
  public labels2 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data2 = [
    [150, 250, 500],
  ];
  public labels3 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data3 = [
    [150, 650, 100],
  ];
  public labels4 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data4 = [
    [250, 550, 300],
  ];
  

}
