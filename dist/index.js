"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  configureSize: () => configureSize,
  moderateScale: () => moderateScale,
  moderateVerticalScale: () => moderateVerticalScale,
  ms: () => ms,
  mvs: () => mvs,
  s: () => s,
  scale: () => scale,
  verticalScale: () => verticalScale,
  vs: () => vs
});
module.exports = __toCommonJS(index_exports);
var import_react_native = require("react-native");
var DEFAULT_GUIDELINE_WIDTH = 375;
var DEFAULT_GUIDELINE_HEIGHT = 812;
var guidelineWidth = DEFAULT_GUIDELINE_WIDTH;
var guidelineHeight = DEFAULT_GUIDELINE_HEIGHT;
function assertPositiveNumber(value, name) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be a positive number.`);
  }
}
function configureSize(options) {
  if (options.width !== void 0) {
    assertPositiveNumber(options.width, "width");
    guidelineWidth = options.width;
  }
  if (options.height !== void 0) {
    assertPositiveNumber(options.height, "height");
    guidelineHeight = options.height;
  }
}
function getWindowSize() {
  const { width, height } = import_react_native.Dimensions.get("window");
  return { width, height };
}
function round(size) {
  return import_react_native.PixelRatio.roundToNearestPixel(size);
}
function scale(size) {
  const { width } = getWindowSize();
  return round(width / guidelineWidth * size);
}
function verticalScale(size) {
  const { height } = getWindowSize();
  return round(height / guidelineHeight * size);
}
function moderateScale(size, factor = 0.5) {
  return round(size + (scale(size) - size) * factor);
}
function moderateVerticalScale(size, factor = 0.5) {
  return round(size + (verticalScale(size) - size) * factor);
}
var s = scale;
var vs = verticalScale;
var ms = moderateScale;
var mvs = moderateVerticalScale;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  configureSize,
  moderateScale,
  moderateVerticalScale,
  ms,
  mvs,
  s,
  scale,
  verticalScale,
  vs
});
