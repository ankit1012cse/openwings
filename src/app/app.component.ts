import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openwings';
   fruits: string[] = ['Apple', 'Orange', 'Banana','Apple', 'Orange', 'Banana'];
   set1 = [1,2,3,4,5,6,7,7,8,9,10];

   getData(data:any)
   {
  console.log(data);
   }
}
