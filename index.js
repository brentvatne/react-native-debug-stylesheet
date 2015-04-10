var StyleSheet = require('react-native').StyleSheet;
var merge = require('merge');

function randomHexColor() {
  return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
};

class DebugStyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
    for (var key in obj) {
      obj[key] = merge(obj[key], {borderColor: randomHexColor(), borderWidth: 1});
    }

    return StyleSheet.create(obj);
  }
}

module.exports = DebugStyleSheet;
