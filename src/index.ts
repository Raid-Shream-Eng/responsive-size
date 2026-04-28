import { Dimensions, PixelRatio } from "react-native";

type ScaleOptions = {
  width?: number;
  height?: number;
};

const DEFAULT_GUIDELINE_WIDTH = 375;
const DEFAULT_GUIDELINE_HEIGHT = 812;

let guidelineWidth = DEFAULT_GUIDELINE_WIDTH;
let guidelineHeight = DEFAULT_GUIDELINE_HEIGHT;

function assertPositiveNumber(value: number, name: string) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be a positive number.`);
  }
}

export function configureSize(options: ScaleOptions) {
  if (options.width !== undefined) {
    assertPositiveNumber(options.width, "width");
    guidelineWidth = options.width;
  }

  if (options.height !== undefined) {
    assertPositiveNumber(options.height, "height");
    guidelineHeight = options.height;
  }
}

function getWindowSize() {
  const { width, height } = Dimensions.get("window");

  return { width, height };
}

function round(size: number) {
  return PixelRatio.roundToNearestPixel(size);
}

export function scale(size: number) {
  const { width } = getWindowSize();

  return round((width / guidelineWidth) * size);
}

export function verticalScale(size: number) {
  const { height } = getWindowSize();

  return round((height / guidelineHeight) * size);
}

export function moderateScale(size: number, factor = 0.5) {
  return round(size + (scale(size) - size) * factor);
}

export function moderateVerticalScale(size: number, factor = 0.5) {
  return round(size + (verticalScale(size) - size) * factor);
}

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
