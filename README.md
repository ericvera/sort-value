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

```js
sortValue(after, before);
```
Returns a value between the after and before.

```js
import sortValue from 'sort-value';

const value = sortValue(0, 1);

console.log(value);
// Output: 0.5
```

# Input => Output
* undefined, 0 => -1
* 0, undefined => 1
* 0, 1 => 0.5
* 0, 0.5 => 0.3
* 0, 0.1 => 0.05

# License
[MIT](https://github.com/ericvera/sort-value/blob/master/LICENSE)