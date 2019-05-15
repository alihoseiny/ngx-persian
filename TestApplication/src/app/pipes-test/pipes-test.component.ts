import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JDate} from 'ngx-persian';


@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  fGroup: FormGroup;
  date: JDate;

  constructor() {}

  ngOnInit() {
    this.date = new JDate();
    console.log(new JDate(new Date()));
    this.fGroup = new FormGroup({
      englishPipe: new FormControl(''),
      persianPipe: new FormControl(''),
      tomanPipe: new FormControl(''),
      rialPipe: new FormControl(''),
      irncode: new FormControl(''),
    })
  }

}
