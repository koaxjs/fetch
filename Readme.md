
# fetch

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Fetch effect driver and action creator.

## Installation

    $ npm install @koax/fetch

## Usage

```js
import koax from 'koax'
import {fetch, fetchEffect} from '@koax/fetch'

let app = koax()
app.use(fetchEffect())

app(fetch('google.com')).then((res) => res.status) // => 200

```

## API

### fetch(url, params)
Action creator. See [sane-fetch](//github.com/joshrtay/sane-fetch) for more details.

- `url` - url
- `params` - request paramaters

**Returns:** action object

### fetchEffect()
Effect driver.

**Returns:** koax middleware

## License

MIT

[travis-image]: https://img.shields.io/travis/koaxjs/fetch.svg?style=flat-square
[travis-url]: https://travis-ci.org/koaxjs/fetch
[git-image]: https://img.shields.io/github/tag/koaxjs/fetch.svg
[git-url]: https://github.com/koaxjs/fetch
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@koax/fetch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@koax/fetch
