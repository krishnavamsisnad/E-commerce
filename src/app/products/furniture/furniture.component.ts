import { Component } from '@angular/core';
import { furnitureData } from 'src/data/furniture';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent {
  furnitureInfo=furnitureData;
}
