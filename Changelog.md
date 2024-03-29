# Change log
List of changes of this library during time.

You can get different version [here](https://www.npmjs.com/package/ngx-persian) or download them from npm command line.

# V2.0.1
# Features
- Timezone added to the JDate.
- The `getUTCTime` method added to the JDate.

# V2.0.0
## Improvement
- The library made compatible with Angular 13.
- Code style problems fixed. 
## Breaking Changes
- All enum names converted to the UPPER_CASE pattern.

# V1.3.2
## Improvement
- ngx-persian updated to Angular 11.
- TestApplication updated to Angular 11.
- `compilerOptions` added to the tsconfig file for targeting es5 and supporting
  experimental features. Without the later, new version of typescript raises error.
- `function`s in the `describe`s and test cases replaced by arrow functions.
- In the string literals, double quotation replaced by single quotation.
- Missing semicolons added.
- Long lines broken for meeting line max length constraint.
- radix value added to the `parsInt` calls.
- `getVarDate` field added to the `JDate` for making it compatible with the
  `Date` interface.

## Features
- `addMonth` method added to the `JDate` class.

# V1.3.1
Add `Date` object conversion to the `JDate` objects in the `jdate` before formatting the object.

# V1.3
## Features
- Add `jdate` pipe for formatting `JDate` objects.

## V1.2.0
1. NationalCodeService for validating Iranian national code added.
2.NationalCodePipe(`nationalCode`) is no longer throws an Error when input is not a valid string or is not in the valid range.

## V1.1.2
1. Adding [`getGeorgianDate` method](https://alihoseiny.github.io/ngx-persian/classes/JDate.html#getGeorgianDate) to the [JDate class](https://alihoseiny.github.io/ngx-persian/classes/JDate.html) for getting corresponding Georgian date from Jalali date object. 
2. Fix some mistakes in the README.md file.
3. Add License to and more keywords to package.json file of the library.
