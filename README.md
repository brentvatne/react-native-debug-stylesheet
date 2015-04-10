## react-native-debug-stylesheet

When you want to debug layout problems, use this instead of the normal
`StyleSheet` to get coloured borders around views that are affected by
the stylesheet.

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

---

**MIT Licensed**
