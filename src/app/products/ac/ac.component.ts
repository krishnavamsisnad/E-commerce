import { Component } from '@angular/core';
import { acData } from 'src/data/ac';
@Component({
  selector: 'app-ac',
  templateUrl: './ac.component.html',
  styleUrls: ['./ac.component.css']
})
export class AcComponent {

  acInfo=acData;

}
