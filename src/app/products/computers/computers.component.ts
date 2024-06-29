import { Component } from '@angular/core';
import { computerData } from 'src/data/computers';
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent {
  computerInfo=computerData;
}
