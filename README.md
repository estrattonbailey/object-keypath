# `object-keypath`
Return a string representing the keypath to a key of a specified value.

## API 
```javascript
var getPath = require('object-keypath');

var person = {
  name: 'estrattonbailey',
  meta: {
    occupation: {
      title: 'Developer',
      company: 'Barrel'
    },
    other: {
      title: 'Duplicate Key'
    }
  }
}

getPath(person, name, 'estrattonbailey')
// returns `name`

getPath(person, title, 'Developer')
// returns `meta.occupation.title`

getPath(person, title, 'Duplicate Key')
// returns `meta.other.title`
```

MIT License
