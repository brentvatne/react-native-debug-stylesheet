## react-native-debug-stylesheet

When you want to debug layout problems, use this instead of the normal
`StyleSheet` to get coloured borders (or backgrounds) around views that
are affected by the stylesheet.

![Demo](https://raw.githubusercontent.com/brentvatne/react-native-debug-stylesheet/master/demo.png)

## Add it to your project


1. Run `npm install react-native-debug-stylesheet --save`
2. When you want to debug a layout problem, do something like this:

```javascript
var { PixelRatio, StyleSheet } = require('react-native');
// Drop this in to override the above StyleSheet var and use the
// DebugStyleSheet class instead.
var StyleSheet = require('react-native-debug-stylesheet');

// Business as usual
StyleSheet.create({
  // ....
});
```

If you prefer to use coloured backgrounds, then do this:

```javascript
var StyleSheet = require('react-native-debug-stylesheet').Backgrounds;
```

Or if you'd rather make your own debug stylesheet:

```javascript
var { createDebugStylesheet, randomHexColor } = require('react-native-debug-stylesheet');
var StyleSheet = createDebugStylesheet({color: randomHexColor, fontWeight: 'bold', fontSize: someOtherFn});
```

Any function value that is passed in will be evaluated with the key of the style it will be applied to,
so if you want to apply this to only specific things this is possible too:

```javascript
var { createDebugStylesheet, randomHexColor } = require('react-native-debug-stylesheet');
var StyleSheet = createDebugStylesheet({color: randomHexColor, fontWeight: boldForHeaders});
var boldForHeaders = (key) => {
  if (key.match(/header/)) {
    return 'bold';
  } else {
    return 'normal';
  }
}
```

---

**MIT Licensed**
