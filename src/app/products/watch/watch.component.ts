import { Component } from '@angular/core';
import { watchData } from 'src/data/watch'
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  watchInfo=watchData;
}
