# NgxPersian
![npm](https://img.shields.io/npm/dt/ngx-persian.svg?style=popout-square)
![npm](https://img.shields.io/npm/v/ngx-persian.svg?style=popout-square)
![documentation](https://img.shields.io/badge/documentation-73%25-blueviolet.svg?style=popout-square)
![test coverage](https://img.shields.io/badge/Test%20Coverage-90%25-success.svg?style=popout-square)


A full featured tool set for Persian Applications Created by Angular (v > 2) containing Pipes, Services, Directives and javascript Similar Date object for working with Jalali Date.

You can use Tools provided by this library for:
- Converting English numbers to Persian numbers and vise versa 
- Validating persian text with different options
- Validating persian numbers for numeric inputs
- Converting and validating Jalali Date and time like native javascript Date object
- Formatting Jalali Dates using jdate pipe
- Formatting currency values in Rial or Toman currency type with flexable options.
- Validating and Formatting Iranian National Number
- Validating phone numbers of Iranian Mobile operators.
- Getting operator name of a phone number in English or Persian
- Validating reactive and template-base form inputs for persian numbers or texts.

## Why you should use this library?
There are many reasons for using this library For everyone who develops an Angular application for people living in Iran:
* You can find almost everything you need in a signle library and don't need to install thousand of different libraries.
* It's developed for recent version of angular (v4 to v7) and is not out ot date like most of other libraries.
* We solved problems in Angular way, not like most of other libraries those only glued a js solution to the Angular and Typescript.
* It's alive! Many of other persian libraries have unanswered issues from 1-2 year ago.
* Almost everything has been tested. There are more than 590 unit tests written for all parts. So you can use everything without any fear of breaking things down.
* It's documented. Everything are clear and you can find anything you want from this document, code document and also unit test.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [NgxPersian](#ngxpersian)
  - [Why you should use this library?](#why-you-should-use-this-library)
- [How to Install?](#how-to-install)
- [Documents](#documents)
  - [Pipes](#pipes)
    - [faNum](#fanum)
    - [enNum](#ennum)
    - [irc](#irc)
    - [nationalCode](#nationalcode)
    - [jdate](#jdate)
  - [Services](#services)
    - [PersianNumberService](#persiannumberservice)
    - [PersianLetterService](#persianletterservice)
    - [MobilePhoneNumberService](#mobilephonenumberservice)
    - [JalaliDateValidatorService](#jalalidatevalidatorservice)
    - [JalaliDateCalculatorService](#jalalidatecalculatorservice)
  - [Jalali Date](#jalali-date)
  - [NationalCodeService](#nationalcodeservice)
  - [Validators](#validators)
    - [persianNumbersValidator](#persiannumbersvalidator)
    - [persianNumbersValidator](#persiannumbersvalidator-1)
  - [Directives](#directives)
- [Contribution](#contribution)
- [There is any problem?](#there-is-any-problem)
- [Citations](#citations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# How to Install?
For installing this library, you can simply run following command in your Angular app root:

`npm install ngx-persian --save`

For installing the library globally, you can run following command instead:

`npm install ngx-persian -g`

# Documents
Short documentation of the library is here. For more detailed documents, you can see the [code document](https://alihoseiny.github.io/ngx-persian/).

## Pipes
We are using pipes for formatting values in the templates. We Have 4 Different pipes in the **ngx-persian** for formatting stuff needed by the persian app developers:
### faNum
This pipe replaces all the English and Arabic digits to the Persian Digits without any need for additional code or parameter.

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {FaNumPipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`FaNumPipe,`

Now you can this pipe anywhere you like in your templates.

For example, if we want to convert non-english digits in a attribute named: `englishTextDigit`, we can use this code in our template:

`{{englishTextDigit | faNum}}`

### enNum
This pipe replaces all the Persian Digits to English digits without any need for additional code or parameter.

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {EnNumPipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`EnNumPipe,`

You can use this pipe anywhere you like in your templates for converting persian digits to english digits.

For example, if we want to convert persian digits in a attribute named: `persianTextDigit`, we can use this code in our template:
`{{persianTextDigit | enNum}}`

You can see the example usage of these pipes in below GIF:

![faNum and enNum pipes](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/faNum%20and%20enNum%20pipes.gif "Animation of faNum and enNum pipes usage")

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/tree/master/TestApplication/src/app/pipes-test) or see: [related section in code document for EnNumPipe](https://alihoseiny.github.io/ngx-persian/pipes/EnNumPipe.html) or see: [related section in code document for FaNumPipe](https://alihoseiny.github.io/ngx-persian/pipes/FaNumPipe.html). 

Also you can see [unit tests of FaNumPipe](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/Pipes/faNum.pipe.spec.ts) and [unit tests of EnNumPipe](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/Pipes/enNum.pipe.spec.ts) for more examples of how input and outputs could be. 
### irc
This pipe formats currency values for two popular currency types in Iran: Rian and Toman.

This pipes accepts one optional parameter for declaring currency type And get's this value as first parameter.

Possible values for currency type parameter:

|Value|Output currency type|
|---|---|
|r|ریال|
|rial|ریال|
|t|تومان|
|toman|تومان|

The default value is `r`, so if you don't set any currency type, this pipe will consider that you've chosen rial currency type.

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {IRCurrencyPipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`IRCurrencyPipe,`

You can use this pipe anywhere you like in your templates for formatting a currency value in Iranian currency types.

For example, For converting a digit to rial:
`{{13750 | irc}}` output will be: `13,750 ریال`

You can pass currency type parameter as below:

`{{13750 | irc:'t'}}`

The output will be like:
`137,750 تومان`

You can see the example usage of this pipes in below GIF:

![IR Currency pipe for formatting currency values in rial or toman](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/IRCurrency-toman.gif "IR Currency pipe for formatting currency values in rial or toman")

Also this pipes inherits the [Angular decimal pipe](https://angular.io/api/common/DecimalPipe). So you can choose different formatting styles for numeric part of formatted currency value and pass yor pattern as second parameter of the pipe.

For example, below code recreates default behaviour of the pipe (Grouping each 3 digit from right):

`{{13750 | irc:'r':'1.0-0'}}`

In regular uses, you never need to pass the second parameter, but it's here for more special usages.

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/tree/master/TestApplication/src/app/pipes-test) or see: [related section in code document for IRCurrencyPipe](https://alihoseiny.github.io/ngx-persian/pipes/IRCurrencyPipe.html). 

Also you can see [unit tests of IRCurrencyPipe](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/Pipes/IRCurrency.pipe.spec.ts) for more examples of how input and outputs could be.

### nationalCode
This pipe formats a 10-digit string to national code format like:

`xxx-xxxxxx-x`

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {NationalCodePipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`NationalCodePipe,`

You can use this pipe anywhere you like in your templates for formatting iranian national number.
For example: `0011753646 | nationalCode` produces following text: `001-175364-6`

You can see the example usage of this pipes in below GIF:

![Iranian national code formatter pipe](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/NationalCodePipe.gif "Iranian national number formatter pipe")

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/tree/master/TestApplication/src/app/pipes-test) or see: [related section in code document for NationalCodePipe](https://alihoseiny.github.io/ngx-persian/pipes/NationalCodePipe.html). 

Also you can see [unit tests of NationalCodePipe](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/Pipes/nationalCode.pipe.spec.ts) for more examples of how input and outputs could be.

### jdate
This pipe formats [`JDate`](#jalali-date) object and creates a human readable text with different pre-defined formats. Also you can pass your custom format to it.
If you pass instances of `Date` class those representing Georgian DateTime objects, this pipe first convert that object to an instance of `JDate` class, and then returns formatted Jalali datetime from it.

You can pass Format name or custom format pattern as second parameter of this pipe.

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {JdatePipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`JdatePipe,`

You can use this pipe anywhere you like in your templates for formatting Jalali dates as `JDate` objects or converting and then formatting Georgian dates as `Date` objects.
For example: ` dateObject | jdate` produces following text: `23 اردیبهشت 1397، 12:12 ب.ظ'`

For changing formatting pattern, you can set second parameter like this:

`dateObject| jdate:'small'` That produces this result: `97/2/23 12:12 ب.ظ `

Below you can see list of pre-defined formats:

|Format name|Equivalent Pattern String|Example Result|
|---|---|---|
|short|`yy/m/d h:M t`|97/2/23 12:12 ب.ظ'|
|shortDate|`yy/m/d h:M t`|97/2/23 12:12 ب.ظ|
|medium|`d mmm yyyy، h:M t`|23 اردیبهشت 1397، 12:12 ب.ظ|
|mediumDate|`d mmm yyyy، h:M t`|23 اردیبهشت 1397، 12:12 ب.ظ|
|long|`d mmm yyyy، h:M:S T`|23 اردیبهشت 1397، 12:12:30 بعد از ظهر|
|longDate|`d mmm yyyy، h:M:S T`|23 اردیبهشت 1397، 12:12:30 بعد از ظهر|
|shortTime|`h:M t`|12:12 ب.ظ|
|mediumTime|`h:M:S t`|12:12:30 ب.ظ|
|longTime|`h:M:S.l T`|12:12:30.300 بعد از ظهر|

Also instead of those pattern names, you can set your desired pattern string as described in the [documents of format method of JDate object]().

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/tree/master/TestApplication/src/app/pipes-test) or see: [related section in code document for JdatePipe](https://alihoseiny.github.io/ngx-persian/pipes/JdatePipe.html). 


Also you can see [unit tests of JdatePipe](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/Pipes/jdate.pipe.spec.ts) for more examples of how input and outputs could be.

## Services
We provide some useful Angular Services for data validation and conversion. You can _Inject_ Them anywhere you like using Angular DI.

### PersianNumberService
This service created for validation of strings contains persian digits and converting other digits to the persian ones.

For reading more detailed document, you can see [related part of code document of the PersianNumberService](https://alihoseiny.github.io/ngx-persian/injectables/PersianNumberService.html).

#### Adding PersianNumberService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {PersianNumberService} from 'ngx-persian';`

For _Injecting_ this service, you just need to add it in the constructor of your service or component like this:

`constructor(private persianNumberService: PersianNumberService) {}`

Now you can use it like other attributes of your class with `this` keyword.

So lets digging deep to the class and see what its methods do:

#### arabicToPersian
You can use this method for converting arabic digits in the input string with persian digits. This method will not change other characters of the string and left them unchanged.

Example:
```typescript
console.log(this.persianNumberService.arabicToPersian('٤٥٦'))
// Expected output: ۴۵۶
```  
For more information you can see the [related part of code document about arabicToPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianNumberService.html#arabicToPersian). Also for more examples, you can see the [unit tests of the arabicToPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-number.service.spec.ts#L95).
#### containsPersian
This method checks if input text contains **any** persian digit. So if there is at least one persian digit in the input, returns `true`.

Example:
```typescript
if (this.persianNumberService.containsPersian('A long text with english و فارسی words with a persian digit: ۱')) {
  console.log('Input text contains persian digits.');
} 

if (!this.persianNumberService.containsPersian('یک متن فارسی با اعداد انگلیسی 156465 که رقم فارسی ندارد.')){
  console.log('input text does not contain persian digits.');
}
``` 
For more information you can see the [related part of code document about containsPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianNumberService.html#containsPersian). Also for more examples, you can see the [unit tests of the containsPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-number.service.spec.ts#L18).

#### isPersian
This method check if input string contains **ONLY** persian digits. So if there is any other character, returns `false`.

Example:
```typescript
if (this.persianNumberService.isPersian('۶۸۷۹۷۹۷')) {
  console.log('Input string contains only persian numbers.')
} 

if (!this.persianNumberService.isPersian('۷۶۷۶۸ ۸۹۰۹۷')) {
  console.log('Input string does not contain only persian numbers');
} 
```
For more information you can see the [related part of code document about isPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianNumberService.html#isPersian). Also for more examples, you can see the [unit tests of the isPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-number.service.spec.ts#L59).

#### toEnglish
Converts all Persian digits in the input string to English digits. This method will not change any other characters of the input.

Example:
```typescript
console.log(this.persianNumberService.toEnglish('یک متن با اعداد فارسی مثل ۵۴۳۲۴۴۵'));
// Expected output: یک متن با اعداد فارسی مثل 5432445
```
For more information you can see the [related part of code document about toEnglish method](https://alihoseiny.github.io/ngx-persian/injectables/PersianNumberService.html#toEnglish). Also for more examples, you can see the [unit tests of the toEnglish method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-number.service.spec.ts#L143).

#### toPersian
This method converts all English and Arabic digits to the Persian digits. This method will not change any other characters of the input.

Example:
```typescript
console.log(this.persianNumberService.toPersian('A long text with english digits: 54484 and Arabic digits: ٤٥٦'));
// Expected output: A long text with english digits: ۵۴۴۸۴ and Arabic digits: ۴۵۶
```

### PersianLetterService
This service created for validation of strings contains persian letters and converting arabic letters to the persian ones.

For reading more detailed document, you can see [related part of code document of the PersianLetterService](https://alihoseiny.github.io/ngx-persian/injectables/PersianLetterService.html).

#### Adding PersianLetterService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {PersianLetterService} from 'ngx-persian';`

For _Injecting_ this service, you just need to add it in the constructor of your service or component like this:

`constructor(private persianLetterService: PersianLetterService) {}`

Now you can use it like other attributes of your class with `this` keyword.

So lets digging deep to the class and see what its methods do:

#### containsPersian
This method checks if input string contains **any** persian letter or not. So if there is at least one persian letter in the input, return `true`.

Be careful, digits (۱,۲,...) are not letters.

Example:
```typescript
if (this.persianLetterService.containsPersian('Some words and numbers5454 wtih one persian letterی')) {
  console.log('Input contains persian letters');
} 

if (!this.persianLetterService.containsPersian('۴۳۵۵ fdhf 45')) {
  console.log('Input does not contain persian letters.');
} 
```
For more information you can see the [related part of code document about containsPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianLetterService.html#containsPersian). Also for more examples, you can see the [unit tests of the containsPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-letter.service.spec.ts#L18).

#### isPersian
This method checks if input string contains **ONLY** persian letters or not.

In default mode, if input contains any other character (instead whitespaces and special characters explained below), returns false. But you can control behaviour of this method by second parameter, `options`.

```typescript
isPersian(value: string, options: PLOptions = {
                                                  persianDigits: false,
                                                  enDigits: false,
                                                  symbols: true,
                                                  whitespaces: true}): boolean
```

options parameter is an object implementing [`PLOptions` interface](https://alihoseiny.github.io/ngx-persian/interfaces/PLOptions.html).

You can see possible properties of the options object, their meaning and their default value in the table below:

|Property|Meaning|Default Value|
|---|---|---|
|persianDigits|If sets to `true`, accepts persian digits plus persian letters in the input string|`false`|
|enDigits|If sets to `true`, accept english digits plus persian letters|`false`|
|symbols|Accepts certain symbols plus persian letters. |`true`|
|       |Symbols list:                                 ||                                             ||
|       |  ?$-/:؟!~"'^_-[]{}()%&*><; 
|whitespaces|If sets to `true`, accepts whitespace characters plus persian letters.|`true`|

You can use any combination of those parameters for getting the result you want.

You only need to pass parameters of options those are different from default value. Missing properties will fill with default values.
 

Example:
```typescript
if (this.persianLetterService.isPersian('بدونفاصله'), {whitespaces: false, symbols: false}) {
  console.log('Input string contains only persian letters, not any other thing.');
} 

if (this.persianLetterService.isPersian('متن فارسی با فاصله و علائم به صورت پیش‌فرض قابل قبول است.')) {
  console.log('Input string contains only persian letters, whitespaces and symbols.');
} 
```
For more information you can see the [related part of code document about isPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianLetterService.html#isPersian). Also for more examples, you can see the [unit tests of the isPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-letter.service.spec.ts#L54).

#### toPersian
This method converts arabic letters: `ك` and `ي` to persian letters: `ک` and `ی`.

Example:
```typescript
console.log(this.persianLetterService.toPersian('یك متن فارسي شامل حروف عربی'));
// Expected output: یک متن فارسی شامل حروف عربی
```
For more information you can see the [related part of code document about toPersian method](https://alihoseiny.github.io/ngx-persian/injectables/PersianLetterService.html#toPersian). Also for more examples, you can see the [unit tests of the toPersian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/persian-letter.service.spec.ts#L150).

### MobilePhoneNumberService
This service created for validation of strings contains mobile phone numbers of iranian mobile operators.

You can get operator name and validation result of a phone number by methods of this service.
#### Adding MobilePhoneNumberService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {MobilePhoneNumberService} from 'ngx-persian';`

For _Injecting_ this service, you just need to add it in the constructor of your service or component like this:

`constructor(private mobilePhoneNumberService: MobilePhoneNumberService) {}`

Now you can use it like other attributes of your class with `this` keyword.

So lets digging deep to the class and see what its methods do:

#### isPhoneNumberPatternValid
 This method only checks if phoneNumber follows valid pattern. means starting by `+98` or `0`, then a `9` digit and then 9 digits. This method will not check validity of the phoneNumber code and can accept invalid strings those only locking like phone numbers and in reality are not a valid phone number.

Example:
```typescript
if (this.mobilePhoneNumberService.isPhoneNumberPatternValid('09357413028')) {
  console.log('phone number follows correct pattern');
} 

if (!this.mobilePhoneNumberService.isPhoneNumberPatternValid('912475')) {
  console.log('phone number is not valid.');
} 
```

For more information you can see the [related part of code document about isPhoneNumberPatternValid method](https://alihoseiny.github.io/ngx-persian/injectables/MobilePhoneNumberService.html#isPhoneNumberPatternValid). Also for more examples, you can see the [unit tests of the  isPhoneNumberPatternValid method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/mobile-phone-number.service.spec.ts#L18).

#### getPhoneNumberOperator
This method first checks input for following correct pattern explained in the `isPhoneNumberPatternValid` method.

Then, Checks all codes of all operators in [MobileCodes object](https://alihoseiny.github.io/ngx-persian/miscellaneous/variables.html#MobileCodes). IF finds a matched code, returns persian or english name of that operator from operatorsNames enum.

In default, Persian name of operator will return. For controlling language of the output, you can use second optional parameter (`nameInEnglish`) of this method.

By passing true, operator name will return in English. Default value of `nameInEnglish` parameter is `false.

If there is no recognizable operator for inputted mobile number, a [`InvalidMobileOperatorError`](https://alihoseiny.github.io/ngx-persian/classes/InvalidMobileOperatorError.html) will throw.

Also if input string does not follow correct pattern, an [`InvalidMobilePhoneNumberError`](https://alihoseiny.github.io/ngx-persian/classes/InvalidMobilePhoneNumberError.html) will throw.

Supporting Mobile operator companies are listed in table below:

|Operator Name in English|نام فارسی اپراتور|
|---|---|
|irancell|ایرانسل|
|mci|همراه اول|
|talia|تالیا|
|rightel|رایتل|
|spadan|اسپادان|
|tkc|شبکه مستقل تلفن همراه کیش|
|shatel|شاتل|
|aptel|آپتل|
|azartel|آذرتل|
|samantel|سامانتل|
|lotustel|لوتوس‌تل|
|anarestan|انارستان|

We've provided an enum named `operatorsNames` you can see it [here](https://alihoseiny.github.io/ngx-persian/miscellaneous/enumerations.html#operatorsNames).

Example:
```typescript
console.log(this.mobilePhoneNumberService.getPhoneNumberOperator('09352479965'));
// Expected output: ایرانسل

console.log(this.mobilePhoneNumberService.getPhoneNumberOperator('+989352479965', true));
// Expected output: irancell
```

For more information you can see the [related part of code document about getPhoneNumberOperator method](https://alihoseiny.github.io/ngx-persian/injectables/MobilePhoneNumberService.html#getPhoneNumberOperator). Also for more examples, you can see the [unit tests of the   getPhoneNumberOperator method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/mobile-phone-number.service.spec.ts#L45).

#### isValidPhoneNumber

If phoneNumber follows correct pattern and has valid operator, returns true. Otherwise returns false.

Example:
```typescript
if (this.mobilePhoneNumberService.isValidPhoneNumber('09195574410')) {
  console.log('mobile phone number is valid.');
}

if (this.mobilePhoneNumberService.isValidPhoneNumber('09005574410')) {
  console.log('mobile phone number is not valid.');
}
```

For more information you can see the [related part of code document about isValidPhoneNumber method](https://alihoseiny.github.io/ngx-persian/injectables/MobilePhoneNumberService.html#isValidPhoneNumber). Also for more examples, you can see the [unit tests of the isValidPhoneNumber method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/mobile-phone-number.service.spec.ts#L103).

#### normalizePhoneNumber
Removes +98 from the phoneNumber and replaces it with a 0 character. This method will not make any validation on the input.

Example:
```typescript
console.log(this.mobilePhoneNumberService.normalizePhoneNumber('+989352479965'));
// Expected output: 09352479965
``` 
For more information you can see the [related part of code document about normalizePhoneNumber method](https://alihoseiny.github.io/ngx-persian/injectables/MobilePhoneNumberService.html#normalizePhoneNumber). Also for more examples, you can see the [unit tests of the normalizePhoneNumber method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/mobile-phone-number.service.spec.ts#L91).

### JalaliDateValidatorService
Methods of this Service doing validation stuff on a Jalali date. You can use this Service using DI in all around of your app for validating Jalali dates without needing to convert them to the Georgian Date.

#### Adding JalaliDateValidatorService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {JalaliDateValidatorService} from 'ngx-persian';`

For _Injecting_ this service, you just need to add it in the constructor of your service or component like this:

`constructor(private jalaliDateValidatorService: JalaliDateValidatorService) {}`

Now you can use it like other attributes of your class with `this` keyword.

So lets digging deep to the class and see what its methods do:

#### isJYearLeap
This method gets a Jalali year as input. It jalali year is a leap year, returns `true`. If not, returns `false`.

Example:
```typescript
if (this.jalaliDateValidatorService.isJYearLeap(1375)) {
  console.log('1375 is a leap year.');
} 

if (!this.jalaliDateValidatorService.isJYearLeap(1397)) {
  console.log('1397 is not a leap year.');
} 
```
For more information you can see the [related part of code document about isJYearLeap method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#isJYearLeap). Also for more examples, you can see the [unit tests of the isJYearLeap method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L137).

#### isValidJDate
If Jalali date is not a valid Jalali date, return false. otherwise returns true.
Input format of this method is:

` isValidJDate(jYear, jMonth, jDay) `

`jYear` is a Jalali year. `jMonth` is number of month starting from zero. `jDay` is day number starting from one.

Combination of year, month and day should be a valid date in the calendar.

Example:
```typescript
if (this.jalaliDateValidatorService.isValidJDate(1375, 11, 30)) {
  console.log('Input is a valid Jalali date.');
} 

if (!this.jalaliDateValidatorService.isValidJDate(1397, 11, 30)) {
  console.log('Input is not a valid Jalali date.');
}  
```
For more information you can see the [related part of code document about isValidJDate method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#isValidJDate). Also for more examples, you can see the [unit tests of the isValidJDate method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L10).

#### isValidJDay
Checks if day number is in valid range according to the given year and month.

First six month of the year have 31 days. 5 next months have 30 days and last month maybe has 29 or 30 days.

This method checks is day number in the valid range of day numbers of the month in a particular year or not.

Example:
```typescript
if (this.jalaliDateValidatorService.isValidJDay(1375, 11, 30)) {
  console.log('Input day is valid in Jalali calendar.');
} 

if (!this.jalaliDateValidatorService.isValidJDay(1397, 11, 30)) {
  console.log('Input is not valid in Jalali calendar.');
} 
``` 
For more information you can see the [related part of code document about isValidJDay method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#isValidJDay). Also for more examples, you can see the [unit tests of the isValidJDay method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L30).

#### isValidJMonth
Checks if jalali month is in valid range or not. In default, `jMonth` should start from zero. If you want to start month number from one instead of zero, you should make `startFromZero` parameter to false.

` isValidJMonth(jMonth: number, startFromZero: boolean) `

Be careful about month number. Only in this method you can choose starting month number from one or zero. In others, month number starts only from zero.

Example:
```typescript
if (this.jalaliDateValidatorService.isValidJMonth(12, false)) {
  console.log('Month is valid.');
} 

if (!this.jalaliDateValidatorService.isValidJMonth(12)) {
  console.log('Month is not valid');
} 
```
For more information you can see the [related part of code document about isValidJMonth method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#isValidJMonth). Also for more examples, you can see the [unit tests of the isValidJMonth method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L56).

#### isValidJYear
Checks if jalali year is in acceptable range or not. Acceptable range for this validator is from `-61` to `3177`.


Example:
```typescript
if (this.jalaliDateValidatorService.isValidJYear(1397)) {
  console.log('Year is valid.');
} 

if (!this.jalaliDateValidatorService.isValidJYear(3179)) {
  console.log('Year is not valid');
} 
```
For more information you can see the [related part of code document about isValidJYear method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#isValidJYear). Also for more examples, you can see the [unit tests of the isValidJYear method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L83).

#### jMonthLength
Returns number of days in a given month counting from 1.
` jMonthLength(jYear: number, jMonth: number)`

`jYear` is Jalali year number and `jMonth` is month number starts from zero.

output is number of days in given month. First six months of the year have 31 days. 5 next months have 30 days and last month maybe has 29 or 30 days.

Example:
```typescript
console.log(this.jalaliDateValidatorService.jMonthLength(1375, 11));
// Expected output: 30

console.log(this.jalaliDateValidatorService.jMonthLength(1397, 0));
// Expected output: 31
```
For more information you can see the [related part of code document about jMonthLength method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#jMonthLength). 
Also for more examples, you can see the [unit tests of the jMonthLength method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L91).

#### numOfJLeapYears
Return number of leap years passed from base year until given Jalali year.

For more information you can see the [related part of code document about numOfJLeapYears method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateValidatorService.html#numOfJLeapYears). 
Also for more examples, you can see the [unit tests of the numOfJLeapYears method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-validator.service.spec.ts#L113).

### JalaliDateCalculatorService
This service converts Georgian date to Jalali and vase versa. You can use all of the methods as static methods.


#### Adding JalaliDateCalculatorService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {JalaliDateCalculatorService} from 'ngx-persian';`

For _Injecting_ this service, you just need to add it in the constructor of your service or component like this:

`constructor(private jalaliDateCalculatorService: JalaliDateCalculatorService) {}`

Now you can use it like other attributes of your class with `this` keyword.

JalaliDateValidatorService injected into this service. So if you want to create an instance of this service and don't want to use DI, you should pass an instance of that service in it. But if you are using DI as described before, you don't need to do anything at all.

So lets digging deep to the class and see what its methods do:

#### convertToGeorgian
Converts a valid jalali date to a [javascript `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object representing a equivalent Georgian date.
this method looking like:

`convertToGeorgian(jYear: number, jMonth: number, jDay: number)`

`jYear` is a full Jalali year like 1397.
`jMonth` is month number starting from zero.
`jDay` in day number starting from one.

Example:
```typescript
this.jalaliDateCalculator.convertToGeorgian(1397, 11, 22);
// Expecting output of this line is: Date(2019, 2, 13);
``` 

For more information you can see the [related part of code document about convertToGeorgian method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#convertToGeorgian). 
Also for more examples, you can see the [unit tests of the convertToGeorgian method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L139).

#### convertToJalali
This method converts Georgian date to the jalali date. Output is an object implementing [SimpleDateInterface](https://alihoseiny.github.io/ngx-persian/interfaces/SimpleDateInterface.html).

ATTENTION: month number starts from 0, but day number starts from 1. Just like native javascript Date object.

Input of this method is a native javascript `Date` object.

Example:
```typescript
const jalali = this.jalaliDateCalculator.convertToJalali(new Date(2019, 2, 13));
console.log(jalali.year); // Expected output: 1397
console.log(jalali.month) // Expected output: 11
console.log(jalali.day) // Expected output: 22
```
For more information you can see the [related part of code document about convertToJalali method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#convertToJalali). 
Also for more examples, you can see the [unit tests of the convertToJalali method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L122).

#### createGDateFromDays
Creates a javascript Date object from number of passed days in Georgian calendar representing Georgian date.

Example:
```typescript
console.log(this.jalaliDateCalculator.createGDateFromDays(2458736));
// Expected output: Date(2019, 8, 9)
```
For more information you can see the [related part of code document about createGDateFromDays method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#createGDateFromDays). 
Also for more examples, you can see the [unit tests of the createGDateFromDays method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L28).

#### firstDayOfJYearInMarch
First day of the Farvardin month in Jalali calendar is in March month. This method returns the day number of starting day of new jalali year in March.

The day number starts from 1 not zero and is equal to the real numbers in the calendar.

Example:
```typescript
console.log(this.jalaliDateCalculator.firstDayOfJYearInMarch(1398));
// Expected output: 21
```
For more information you can see the [related part of code document about firstDayOfJYearInMarch method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#firstDayOfJYearInMarch). 
Also for more examples, you can see the [unit tests of the firstDayOfJYearInMarch method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L108).

#### georgianYearToJalaliYear
Converts georgian year to the jalali year. Output year is the jalali year that start within the Georgian year.

Example:
```typescript
console.log(this.jalaliDateCalculator.georgianYearToJalaliYear(2018));
// Expected output: 1397
```
For more information you can see the [related part of code document about georgianYearToJalaliYear method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#georgianYearToJalaliYear).

#### jalaliYearToGeorgianYear
Converts jalali year number to the georgian year. Output year is the georgian year that jalali year starts within it, not the year that starts in the winter of jalali year.

Example:
```typescript
console.log(this.jalaliDateCalculator.jalaliYearToGeorgianYear(1397));
// Expected output: 2018
```
For more information you can see the [related part of code document about jalaliYearToGeorgianYear method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#jalaliYearToGeorgianYear).

#### numberOfPassedGDays
Calculates the Julian Day number from Gregorian or Julian calendar dates.

Input value of this method is a javascript `Date` object.

Example:
```typescript
const dateObj = new Date(2019, 8, 9);
console.log(this.jalaliDateCalculator.numberOfPassedGDays(dateObj));
// Expected output: 2458736
```
For more information you can see the [related part of code document about numberOfPassedGDays method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#numberOfPassedGDays). 
Also for more examples, you can see the [unit tests of the numberOfPassedGDays method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L10).

#### numberOfPassedJDays
Returns number of passed days from source day in jalali calendar to the given jalali date.

method declaration:
`numberOfPassedJDays(jYear: number, jMonth: number, jDay: number) `

`jYear` is a full Jalali year like 1397.
`jMonth` is month number starting from zero.
`jDay` in day number starting from one.

Example:
```typescript
console.log(this.jalaliDateCalculator.numberOfPassedJDays(1397, 0, 1));
// Expected output: 2458199
```
For more information you can see the [related part of code document about numberOfPassedJDays method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#numberOfPassedJDays). 
Also for more examples, you can see the [unit tests of the numberOfPassedJDays method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L61).

#### numOfGLeapYears
This function returns number of passed leap years from AD 621 until `targetGYear`.

Example:
Example:
```typescript
console.log(this.jalaliDateCalculator.numOfGLeapYears(2018));
// Expected output: 339
```
For more information you can see the [related part of code document about numOfGLeapYears method](https://alihoseiny.github.io/ngx-persian/injectables/JalaliDateCalculatorService.html#numOfGLeapYears). 
Also for more examples, you can see the [unit tests of the numOfGLeapYears method](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/JDate/jalali-date-calculator.service.spec.ts#L93).

## Jalali Date
We always had problems with Jalali dates. Built-in javascript `Date` object created for Georgian date and everything has been built for that object.

Now, in **ngx-persian**, we solved the problem for ever.

We provided a class named `JDate`. This class implemented [javascript native `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). So you have access to all the methods and behaviours of that object, now in Jalali.

Also you can use objects of `JDate` everywhere accepts javascript native `Date` object.

That means you can use all libraries, services and ... those are working with javascript `Date` object, with Jalali date. without any need for changing things or writing them for Jalali date from scratch.

This is the end of bad days for Iranian developers.🍷🍷🍷

### How to add JDate to your project?
For using `JDate`, you only need to import it in the file you are working on it:

`import {JDate} from 'ngx-persian';`

### How to create instances of JDate
There are many ways to create a Jalali Date object for your convenience.
1. getting current date and time by creating an instance without any parameter: `new JDate()`
2. Creating `JDate` object from a jalali date string as described in the
 [`pars` method document](https://alihoseiny.github.io/ngx-persian/classes/JDate.html#parse), you can pass that string as
 first parameter and leave others empty. `new JDate('11 دی 1348 00:00:00')`
 3. Creating `JDate` object from number of passed milliseconds from UNIX epoch: `new JDate(-12600000)`
 4. Creating `JDate` object from a Georgian Date object and convert that date to the Jalali date effortlessly: `new JDate(new Date(2018, 1, 1))`
 5. Creating JDate object from date and time values: `new JDate(1397, 12, 25)` or `new JDate(1397, 12, 25, 12, 32, 45, 123)`

As I said, This class implements entire `Date` object, so there are many methods and you can do anything you could do with javascript `Date` , 
plus some additional methods for simpler use like [`format` method](https://alihoseiny.github.io/ngx-persian/classes/JDate.html#format) that formats date and time in desired pattern.

[**You can see complete document of all methods of this class by clicking on this text**.](https://alihoseiny.github.io/ngx-persian/classes/JDate.html)

[Also you can get more clear vision of each method by viewing unit test of JDate class here.](https://github.com/alihoseiny/ngx-persian/blob/master/projects/ngx-persian/src/lib/JDate/jdate.spec.ts)

By using this class in your app, you never need another help for working and validating Jalali date and time.

## NationalCodeService
You can use this service for validating Iranian national code (number) And finding out if user input is a correct National code or not.
For reading more detailed document, you can see [related part of the code document of the NationalCodeService] (https://alihoseiny.github.io/ngx-persian/injectables/NationalCodeService.html)

### Adding NationalCodeService to Your Application
For using this service you only need to import it in the file you want to use that in it. Simple as this:

`import {NationalCodeService} from 'ngx-persian';`

For Injecting this service, you just need to add it in the constructor of your service or component like this:

`constructor(private nationalCodeService: NationalCodeService) {}`

Now you can use it like other attributes of your class with this keyword.

So lets digging deep to the class and see what its methods do:

### normalize
This method normalizes inputs for being a 10-digit string.

This method removes whitespaces from sides of the input and adds zero character at the beginning of the input until the length of the result reach to 10.

If Input length is shorter than 8 or longer than 10, an [`InvalidNationalCodeError](https://alihoseiny.github.io/ngx-persian/classes/) will throw.

Example:
```typescript
console.log(this.nationalCodeService(15234756));
// Expected output is: '0015234756'

console.log(this.nationalCodeService('015234756'));
// Expected output is: '0015234756'

console.log(this.nationalCodeService('0015234756'));
// Expected output is: '0015234756'

try {
  this.nationalCodeService('34756');
} catch (e) {
  console.log('Input length is less than 8 and an InvalidNationalCodeError throw');
}

```

For more information you can see [the related part of code document about normalize](https://alihoseiny.github.io/ngx-persian/injectables/NationalCodeService.html#normalize) method. Also for more examples, you can see the [unit tests of the normalize method](https://github.com/alihoseiny/ngx-persian/tree/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/national-code.service.spec.ts#L10).

### isValid
This method first normalizes the input using normalize method and implicitly checks input length, So you DO NOT NEED to normalize input before, but this will not make any bad effect.

Then checks the validity of the input for being a valid Iranian national code. If it's a valid code, return true. Otherwise returns false.

Example:

```typescript
console.log(this.isValid(2365478824));
// Expected output: true

console.log(this.isValid(7731689951));
// Expected output: false
``` 

For more information you can see [the related part of code document about isValid](https://alihoseiny.github.io/ngx-persian/injectables/NationalCodeService.html#isValid) method. Also for more examples, you can see the [unit tests of the normalize method](https://github.com/alihoseiny/ngx-persian/tree/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Services/national-code.service.spec.ts#L60).

## Validators
There are different validators for reactive forms. You can use them in your forms for validating data related to Iran or Farsi language without any need for writing new code.

### persianNumbersValidator
Reactive form validator that checks form control value contains only persian numbers.

#### Adding persianNumbersValidator to your code
First you should add validator in your component:

`import {persianNumbersValidator} from 'ngx-persian';`

Then you should add it to validators list of desired `FormControl`. That's it.
You can see the example usage in below GIF:
![Angular form persian number validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianNumbersValidator.gif "Angular form persian number validator")

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/blob/master/TestApplication/src/app/validator-functions/validator-functions.component.ts)

For more information you can see the [related part of code document about persianNumbersValidator](https://alihoseiny.github.io/ngx-persian/miscellaneous/functions.html#persianNumbersValidator). 
Also for more examples, you can see the [unit tests of the persianNumbersValidator](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Validators/persian-validators.spec.ts#L24).

### persianNumbersValidator
Reactive form validator that checks form control value contains only persian numbers.

#### Adding  persianLettersValidator to your code
First you should add validator in your component:

`import {persianLettersValidator} from 'ngx-persian';`

Reactive form validator that checks form control value contains only persian letters and allowed characters in the options parameter.

This validator gets an optional options parameter as `isPersian` method of `PersianLetterService`.

For validating only persian letters without any other character (default behavior), you can add validator to your `FormControl` like it:

`persianLettersValidator()`

You can see the example usage in below GIF:
![Angular form only persian letters validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianLettersValidator-only%20letters.gif "Angular form only persian letters validator")

For validating only persian letters and whitespaces, you can add validator to your `FormControl` like it:

`persianLettersValidator({whitespaces: true})`

You can see the example usage in below GIF:
![Angular form persian letters and whitespaces validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianLettersValidator-letters%20and%20whitespaces.gif "Angular form persian letters and whitespaces validator")

For validating only persian letters and english digits, you can add validator to your `FormControl` like it:

`persianLettersValidator({enDigits: true})`

You can see the example usage in below GIF:
![Angular form persian letters and english digits validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianLettersValidator-letters%20and%20en%20digits.gif "Angular form persian letters and english digits validator")

For validating only persian letters and persian digits, you can add validator to your `FormControl` like it:

`persianLettersValidator({persianDigits: true})`

You can see the example usage in below GIF:
![Angular form persian letters and persian digits validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianLettersValidator-letters%20and%20fa%20digits.gif "Angular form persian letters and persian digits validator")

For validating only persian letters and symbols, you can add validator to your `FormControl` like it:

`persianLettersValidator({symbols: true})`

You can see the example usage in below GIF:
![Angular form persian letters and symbols validator](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/persianLettersValidator-letters%20and%20symbols.gif "Angular form persian letters and symbols validator")

You can validate inputs with any combination of these options.

**Still have questions?** see the [related part of example app](https://github.com/alihoseiny/ngx-persian/tree/master/TestApplication/src/app/validator-functions)

For more information you can see the [related part of code document about persianLettersValidator](https://alihoseiny.github.io/ngx-persian/miscellaneous/functions.html#persianLettersValidator). 
Also for more examples, you can see the [unit tests of the persianLettersValidator](https://github.com/alihoseiny/ngx-persian/blob/e198c5577abca4bc634ea20ef1bccb863c8796ef/projects/ngx-persian/src/lib/Validators/persian-validators.spec.ts#L49).

## Directives
For template-driven forms, we also provided Two directives those using above validator functions.

Read [code document of PersianLetterDirective](https://alihoseiny.github.io/ngx-persian/directives/PersianLetterDirective.html) or [code document of PersianNumbersDirective].(https://alihoseiny.github.io/ngx-persian/directives/PersianNumbersDirective.html)

# Contribution
We want to keep this library fresh and useful for all Iranian developers. So we need your help for adding new features, fixing bugs and adding more documents.

## How You can Help All Iranian Angular Developers?
You are wondering how you can contribute in this project? Here is a list of what you can do:
1. You did anything useful and special for Iranian apps? So you can add that in this library and save other developers time.
2. You think number of tests for some part of this library is not enough? So you can write more tests.
3. Documents are not enough? You can help us by adding more documents.
4. Current code could be better? You can make this cleaner or faster.

You should follow these steps for contributing in this project:
## 1. Getting the Repository
For contributing, first fork the repository. Then create your branch and start coding.
## 2. Add Tests
We are following TDD guides for developing this library, So you **SHOULD** add tests first and then add your code.
## 3. Write the Dock
All codes should have complete in-code document following JSDoc syntax. Plus you should re-generate the code document using [compodoc](https://compodoc.app).
For generating documents, you should run following command in the _project_ directory:
`npm run generate-docs`

Also you should add some documents about how to using a feature in the `README.md` file.

## 4. Create A Pull Request
Now you are done and want to add your code. So come here and create a new pull request. Please make pull request message complete and useful. Also you should keep all commit messages in your branch meaningful and useful.

Thank you for your contribution and make life easier for Iranian Angular developers.

# There is any problem?
If you have questions, find some bugs or need some features, you can open an issue and tell us. For some strange reasons this is not possible? so contact me by this email: `salam@alihoseiny.ir`.
# Citations
I should say a thank you to developers of [jalaali js](https://github.com/jalaali/jalaali-js) and it's implementation in Type script: [jalaali Helper in Typescript](https://github.com/sijad/ts-jalaali/) Because I used their code in Jalali services.
