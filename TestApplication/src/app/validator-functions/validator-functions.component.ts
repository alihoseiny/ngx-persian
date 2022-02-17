import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {persianLettersValidator, persianNumbersValidator} from 'ngx-persian';

@Component({
  selector: 'app-validator-functions',
  templateUrl: './validator-functions.component.html',
  styleUrls: ['../pipes-test/pipes-test.component.css']
})
export class ValidatorFunctionsComponent implements OnInit {

  fGroup: FormGroup;

  constructor() {
    this.fGroup = new FormGroup({
      onlyPersianNumbers: new FormControl('', [persianNumbersValidator()]),
      onlyPersianLetters: new FormControl('', [persianLettersValidator()]),
      persianLettersWithWhiteSpace: new FormControl('', persianLettersValidator({whitespaces: true})),
      persianLettersWithEnglishNums: new FormControl('', persianLettersValidator({enDigits: true})),
      persianLettersWithPersianNums: new FormControl('', persianLettersValidator({persianDigits: true})),
      persianLettersWithSymbols: new FormControl('', persianLettersValidator({symbols: true})),
    });
  }

  ngOnInit() {
  }

}
