import { Component } from '@angular/core';
import { kitchenData } from 'src/data/kitchen'
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  kitchenInfo=kitchenData;
}
