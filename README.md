# table-left-column-fixed-on-horizontal-scroll
Simple changing the position of elements (tags) depends on the width of the window.

![](https://i.imgur.com/L2KWfVI.gif)

![](https://i.imgur.com/2wDxk8S.gif)


## Demo

https://webdeveloper.pro/demo/table-left-column-fixed-on-horizontal-scroll/demo.html


## Install

1. Install jQuery

2. Install adaptive-swapper

   Git

   ```
   npm install https://github.com/mavlutovr/table-left-column-fixed-on-horizontal-scroll.git --save
   ```

   Npm

   ```
   npm install table-left-column-fixed-on-horizontal-scroll --save
   ```

## Setup

```javascript
import 'table-left-column-fixed-on-horizontal-scroll';
import 'table-left-column-fixed-on-horizontal-scroll/index.css';
```

## Usage

```javascript
$(document).ready(function () {
    $('.table-scroll-x').tableScrollX({
        fixedCellsSelector: 'th', // Default value
    });
});
```

## License

[MIT License](https://github.com/mavlutovr/adaptive-swapper/blob/main/LICENSE)