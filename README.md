
# NgxPersian

A full featured tool set for Persian Application Created by Angular (v > 2) containing Pipes, Services, Directives and javascript Similar Date object for working with Jalali Date.

You can use Tools provided by this library for:
- Converting English numbers to Persian numbers and vise versa 
- Validating persian text with different options
- Validating persian numbers for numeric inputs
- Converting and validating Jalali Date and time like native javascript Date object
- Formatting currency values in Rial or Toman currency type with flexable options.
- Formatting Iranian National Number
- Validating phone numbers of Iranian Mobile operators.
- Getting operator name of a phone number in English or Persian
- Validating reactive and template-base form inputs for persian numbers or texts.

# How to Install?
For installing this library, you can simply run following command in your Angular app root:

`npm install ngx-persian --save`

For installing the library globally, you can run following command instead:

`npm install ngx-persian -g`

# Documents
Short documentation of the library is here. For more detailed documents, you can see the [code document](http://).

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

## enNum
This pipe replaces all the Persian Digits to English digits without any need for additional code or parameter.

For using this pipe, firstly you need to import the pipe from the library in your module:

`import {EnNumPipe} from 'ngx-persian';`

Then, like any other pipe, you need to _declare_ the pipe in your module. For this, you should add following line in the `declarations` array of the `@NgModule` of your module:

`EnNumPipe,`

Now you can this pipe anywhere you like in your templates.

For example, if we want to convert persian digits in a attribute named: `persianTextDigit`, we can use this code in our template:
`{{persianTextDigit | enNum}}`

You can see the example usage of these pipes in below GIF:

![faNum and enNum pipes](https://github.com/alihoseiny/ngx-persian/raw/master/Usage%20Examples/chrome-capture.gif "Animation of faNum and enNum pipes usage")

Still have questions? see the related part of example app or see related section in code document. 

Also you can see unit tests of FaNumPipe and unit tests of EnNumPipe for more examples of how input and outputs could be. 
