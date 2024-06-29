import { Component } from '@angular/core';
import { menData } from 'src/data/men';
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  menInfo=menData;
}
