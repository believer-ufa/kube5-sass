# Kube 5 CSS Framework port for Sass

Simple port to use [Kube Framework](https://imperavi.com/kube/) in Sass-based projects.

# Small additions

### .clearfix class

Like in Bootstrap for simple clearfixing containers.

### Slightly smaller font on small devices

```scss
// typography.scss
html {
    /* This rule exists in less Kube Framework */
	font-size: 62.5%;
    /* Add additional rule for small devices: */
	@media (max-width: $breakpoint-small) {
		font-size: 55%;
    }
}
```

### New width breackpoint for very small devices

```scss
// variables.scss
// Breakpoints
$breakpoint-verysmall: 450px !default; /* this is new variable */
$breakpoint-small: 768px !default;
$breakpoint-medium: 1024px !default;
$breakpoint-large: 1200px !default;
```

And using this new variable in Grid styles.

# Issues

Something don't converted successfully :(

### retina-image mixin

```less
// original mixin
.retina-image(@path, @w: auto, @h: auto) {
  background-image: url(@path);
  @at2x_path: ~`@{path}.replace(/\.\w+$/, function(match) { return "@2x" + match; })`;

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    background-image: url(@at2x_path);
    background-size: @w @h;
  }
}
```

Because sass dont can search and replace strings through regular expressions..