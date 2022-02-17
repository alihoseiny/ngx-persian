import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  fGroup: FormGroup;
  date: Date;
  persianDigits = '';
  englishDigits = '';
  rialPrice = '';
  tomanPrice = '';
  nationalCode = '';

  constructor() {
    this.fGroup = new FormGroup({
      englishPipe: new FormControl(''),
      persianPipe: new FormControl(''),
      tomanPipe: new FormControl(''),
      rialPipe: new FormControl(''),
      irncode: new FormControl(''),
    });
    this.date = new Date();
  }

  ngOnInit() {
    this.fGroup.get('englishPipe')?.valueChanges.subscribe(value => {
      this.englishDigits = value;
    });

    this.fGroup.get('persianPipe')?.valueChanges.subscribe(value => {
      this.persianDigits = value;
    });

    this.fGroup.get('tomanPipe')?.valueChanges.subscribe(value => {
      this.tomanPrice = value;
    });

    this.fGroup.get('rialPipe')?.valueChanges.subscribe(value => {
      this.rialPrice = value;
    });

    this.fGroup.get('irncode')?.valueChanges.subscribe(value => {
      this.nationalCode = value;
    });
  }

}
