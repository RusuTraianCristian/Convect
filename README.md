# Convect

Custom React Hooks to enhance rapid prototyping.

## Installation

Use [npm](https://www.npmjs.com/get-npm) to install Convect.

```bash
npm i convect
```
## Usage

```javascript
import { useFetch, useStorage } from 'convect';

const options = {
    // url
    // method
    // headers
    // body
}

const [data, status] = useFetch(options);
// returns an array with the fetched data and its corresponding status code

const data = useStorage(storage, method, key, value);
// accepts localStorage or sessionStorage as the storage type
// methods (string) 'set'or 'get''
// key/value optionals

// returns the value of 'key' on both set/get as React state
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

This is a small library of custom React hooks made to ease my work when dealing with React web applications. I've found myself repeating code many times when dealing with changing themes and storing information in localStorage, as well as repeating fetch calls with just some different arguments. SO I've figured to build some hooks to simply import and use when needed.

## License
[MIT](https://choosealicense.com/licenses/mit/)
