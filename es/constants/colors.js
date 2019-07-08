import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import without from 'lodash.without';
export var COLOR = {
  AQUA: {
    LIGHTEST: '#e6f2ff',
    LIGHT: '#cce4ff',
    NORMAL: '#99c9ff',
    DARK: '#0071f2',
    DARKEST: '#004da6',
  },
  GOLD: {
    LIGHTEST: '#ffeecc',
    LIGHT: '#ffda8f',
    NORMAL: '#ffcc66',
    DARK: '#ed9e00',
    DARKEST: '#8f3c00',
  },
  NEUTRAL: {
    LIGHTEST: '#ffffff',
    LIGHT: '#f7f7fa',
    NORMAL: '#e4e4e6',
    DARK: '#c0c0c4',
    DARKEST: '#82828c',
  },
  MINT: {
    LIGHTEST: '#d3f2f2',
    LIGHT: '#57d3d2',
    NORMAL: '#00b2b2',
    DARK: '#008a8c',
    DARKEST: '#004b4d',
  },
  RUBY: {
    LIGHTEST: '#ffe2d9',
    LIGHT: '#ffbca6',
    NORMAL: '#ff7040',
    DARK: '#e84b17',
    DARKEST: '#992600',
  },
  TEAL: {
    LIGHTEST: '#e1ecfa',
    LIGHT: '#c1cede',
    NORMAL: '#64788f',
    DARK: '#344b63',
    DARKEST: '#2a3b4d',
  },
  VIOLET: {
    LIGHTEST: '#f0f0ff',
    LIGHT: '#d3d1fe',
    NORMAL: '#928cff',
    DARK: '#6961ff',
    DARKEST: '#130abf',
  },
};
export var COLORS = Object.keys(COLOR).map(function(key) {
  return key.toLowerCase();
});
export var TINTS = Object.keys(COLOR[Object.keys(COLOR)[0]]).map(function(key) {
  return key.toLowerCase();
});
export var colorsWithout = function colorsWithout(colorsToExclude) {
  return without.apply(void 0, [COLORS].concat(_toConsumableArray(colorsToExclude)));
};
export var tintsWithout = function tintsWithout(tintsToExclude) {
  return without.apply(void 0, [TINTS].concat(_toConsumableArray(tintsToExclude)));
};
