import { Component } from '@angular/core';
import { womanData } from 'src/data/woman';
@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent {
  womanInfo=womanData;
}
