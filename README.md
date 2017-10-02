# sort-value
A JavaScript utility library to generate sort values (floating point).

<p>
  <a href="https://npmjs.org/package/sort-value">
    <img src="https://img.shields.io/npm/v/sort-value.svg?style=flat-square">
  </a>
</p>

# Usage

Install the module:

```sh
npm install sort-value --save
```

### ES6
```js
import nameInitials from 'sort-value';

const initials = nameInitials('John Smith');

console.log(initials);
// Output: JS
```

### Pre-ES6
```js
var nameInitials = require('sort-value');

var initials = nameInitials('John Smith');

console.log(initials);
// Output: JS
```

# Input => Output
* E. => E
* Eric => E
* E. Vera => EV
* Eric V. => EV
* Eric A. E. => EA
* Eric A. E. Vera => EV
* Eric A. Vera => EV
* Eric A. Vera Perez => EV
* Eric Vera-Perez => EV
* Eric A. Vera-Perez => EV
* Eric Vera Perez => EV
* Eric A. de Vera Perez => ED
* Eric A. de Vera-Perez => ED
* Eric A. Perez-de Vera => EP
* Eric A. Perez de Vera => EP
* Eric (Instructor Somewhere) => E
* Éric Vera => ÉV
* Vera-Perez => VP
* Eric "No Nickname" Vera => E

# License
[MIT](https://github.com/ericvera/sort-value/blob/master/LICENSE)