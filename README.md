# pretty-json-middleware
A middleware to pretty print json

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/pretty-json-middleware.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/pretty-json-middleware.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/pretty-json-middleware/dev-status.svg)][dm-dev]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/orangemug/pretty-json-middleware
[dm-prod]:     https://david-dm.org/orangemug/pretty-json-middleware
[dm-dev]:      https://david-dm.org/orangemug/pretty-json-middleware#info=devDependencies


## Install

```sh
npm install orangemug/pretty-json-middleware
```


## Usage
Just mount it as a middleware

```js
app.use(
  require("pretty-json-middleware")(opts)
);
```

Where `opts` are

 * `query` the query param to bind to, defaults to `pretty`
 * `spaces` the number of spaces to indent by, defaults to `2`

Any request with the query string `?pretty` will pretty print the json, for example

```
http://example.com/some/json/api?pretty
```


## License
[MIT](LICENSE)
