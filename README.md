# Convect

Custom React Hook to send and retrieve data from APIs.

## Installation

Use [npm](https://www.npmjs.com/get-npm) to install Convect.

```bash
npm i convect
```
## Usage

```javascript
import useConvect from './Convect';

const options = {
    // url
    // method
    // headers
    // body
}

const [data, status] = useConvect(options);

// typeof data "object" (data fetched)
// typeof status "number" (request status)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
