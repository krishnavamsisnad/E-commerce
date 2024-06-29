import { Component } from '@angular/core';
import { tvData } from 'src/data/tv';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  tvInfo=tvData;
}
