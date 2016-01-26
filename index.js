var StyleSheet = require('react-native').StyleSheet;
var merge = require('merge');
var assign = require('object-assign');

function randomHexColor() {
  return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
};

function createDebugStylesheet(debugOptions) {
  return {
    create: (styleObject) => {
      for (var styleClass in styleObject) {

        var propertiesForStyleClass = {};
        for (var debugProperty in debugOptions) {

          // Apply the function to get a value unique to this styleClass for the property
          if (typeof debugOptions[debugProperty] == 'function') {
            var value = debugOptions[debugProperty].call(this, styleClass, debugProperty, styleObject[styleClass][debugProperty]);

            if (value != null && (typeof value !== 'undefined')) {
              propertiesForStyleClass[debugProperty] = value;
            }
          // Otherwise just set the value
          } else {
            propertiesForStyleClass[debugProperty] = debugOptions[debugProperty];
          }
        }

        styleObject[styleClass] = merge(styleObject[styleClass], propertiesForStyleClass);
      }

      return StyleSheet.create(styleObject);
    }
  }
}

DefaultDebugStylesheet = createDebugStylesheet({borderColor: randomHexColor, borderWidth: 1});

module.exports = assign(
  DefaultDebugStylesheet,
  { Borders: DefaultDebugStylesheet,
    Backgrounds: createDebugStylesheet({backgroundColor: randomHexColor, opacity: 0.85}),
    createDebugStylesheet: createDebugStylesheet,
    randomHexColor: randomHexColor }
)
