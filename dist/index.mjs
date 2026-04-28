// src/index.ts
import { Dimensions, PixelRatio } from "react-native";
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
  const { width, height } = Dimensions.get("window");
  return { width, height };
}
function round(size) {
  return PixelRatio.roundToNearestPixel(size);
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
export {
  configureSize,
  moderateScale,
  moderateVerticalScale,
  ms,
  mvs,
  s,
  scale,
  verticalScale,
  vs
};
