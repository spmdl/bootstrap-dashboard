# Bootstrap-dashboard 
> 後台表單切版，該專案為 Bootstrap 撰寫的。
> gulp 自動部署 github pages

## 資料夾結構
- App # 原始碼
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - js # JavaScript 放置處
    - style # 樣式放置處
  - index.html # 首頁 HTML
  - layout.ejs # Layout ejs
- gulpfile.js # Gulp 原始碼
  - envOptions.js # Gulp 路徑變數
  - index.js # Gulp 核心原始碼


## 支援的監聽

目前支援 HTML、ejs、JavaScript、Images、SCSS 監聽並自動重新刷新。

圖片新增時也會自動刷新。

因此是不用使用 `Live Sass Compiler` 的 `Watch SCSS` 功能或是 `Prepros` 等工具來編譯 SCSS。

除此之外 Gulp 本身有支援模擬伺服器，因此不用再次使用一些模擬伺服器的套件，例如：`Preview on Web Server` 套件等。