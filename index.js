var StyleSheet = require('react-native').StyleSheet;
var merge = require('merge');
var assign = require('Object.assign');

function randomHexColor() {
  return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
};

function createDebugStylesheet(options) {
  return {
    create: (obj) => {
      for (var key in obj) {
        var debugOptions = {};

        for (var debugKey in options) {
          if (typeof options[debugKey] == 'function') {
            debugOptions[debugKey] = options[debugKey].call(this, key);
          } else {
            debugOptions[debugKey] = options[debugKey];
          }
        }

        obj[key] = merge(obj[key], debugOptions);
      }

      return StyleSheet.create(obj);
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
