# responsive-size

Small React Native helpers for responsive size scaling.

```ts
import { s, vs, ms, mvs, configureSize } from "responsive-size";

configureSize({ width: 375, height: 812 });

const styles = {
  card: {
    width: s(320),
    padding: ms(16),
    marginTop: vs(24),
  },
  title: {
    fontSize: ms(18),
    lineHeight: mvs(24),
  },
};
```

## API

- `scale(size)` / `s(size)`: scales from the current window width.
- `verticalScale(size)` / `vs(size)`: scales from the current window height.
- `moderateScale(size, factor = 0.5)` / `ms(size, factor)`: applies partial width scaling.
- `moderateVerticalScale(size, factor = 0.5)` / `mvs(size, factor)`: applies partial height scaling.
- `configureSize({ width, height })`: changes the design guideline size. Defaults to `375 x 812`.

Use these helpers while rendering styles that can recalculate when dimensions change. Static styles created once at module load time will not automatically update on orientation changes unless the component re-renders.
