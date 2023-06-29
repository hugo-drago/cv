import { Component } from '@angular/core';
import * as expData from '../../../assets/data/experience.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  experienceData: any = expData;
}
