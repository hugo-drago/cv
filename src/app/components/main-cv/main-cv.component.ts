import { Component, OnInit } from '@angular/core';
import * as expData from '../../../assets/data/experience.json';
import * as eduData from '../../../assets/data/education.json';
import * as extraData from '../../../assets/data/extras.json';
import * as personalData from '../../../assets/data/personal_data.json';

@Component({
  selector: 'app-main-cv',
  templateUrl: './main-cv.component.html',
  styleUrls: ['./main-cv.component.scss']
})
export class MainCvComponent implements OnInit {

  personalImage: string = "assets/images/hugo_drago.jpg"
  experienceData: any = expData;
  educationData: any = eduData;
  extrasData: any = extraData;
  personal_data = personalData;

  ngOnInit(): void {
  }

}
