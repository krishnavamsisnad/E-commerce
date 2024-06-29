import { Component } from '@angular/core';
import { mobileData } from 'src/data/mobiles';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobileInfo=mobileData;
}
