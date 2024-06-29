import { Component } from '@angular/core';
import { fridgeData } from 'src/data/fridge';
@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent {
  fridgeInfo=fridgeData;
}
