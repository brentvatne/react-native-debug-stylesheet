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

### Customize

If you'd rather make your own debug stylesheet than use the default
border/background color options, you can do this easily too.

```javascript
var { createDebugStylesheet, randomHexColor } = require('react-native-debug-stylesheet');

var doubleHeaderFontSize = function(styleClass, cssProperty, cssValue) {
  if (cssValue && styleClass.match(/header/)) {
    return cssValue * 2;
  }
  return cssValue;
}

var StyleSheet = createDebugStylesheet({
  backgroundColor: randomHexColor, fontSize: doubleHeaderFontSize,
  borderColor: randomHexColor, borderWidth: 0.5,
});
```

---

**MIT Licensed**
