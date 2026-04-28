type ScaleOptions = {
    width?: number;
    height?: number;
};
declare function configureSize(options: ScaleOptions): void;
declare function scale(size: number): number;
declare function verticalScale(size: number): number;
declare function moderateScale(size: number, factor?: number): number;
declare function moderateVerticalScale(size: number, factor?: number): number;
declare const s: typeof scale;
declare const vs: typeof verticalScale;
declare const ms: typeof moderateScale;
declare const mvs: typeof moderateVerticalScale;

export { configureSize, moderateScale, moderateVerticalScale, ms, mvs, s, scale, verticalScale, vs };
