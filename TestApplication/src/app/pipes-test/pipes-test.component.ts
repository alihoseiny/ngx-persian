import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  fGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.fGroup = new FormGroup({
      englishPipe: new FormControl(''),
      persianPipe: new FormControl(''),
      tomanPipe: new FormControl(''),
      rialPipe: new FormControl(''),
      irncode: new FormControl(''),
    })
  }

}
