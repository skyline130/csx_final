# CS+X web database final proejct

## 使用方式

### Windows

1. `cd panpan`
2. `set DEBUG=panpan:* & npm start`
3. 在網址打`http://localhost:3000`

### Linux, MacOS

1. `cd panpan`
2. `DEBUG=panpan:* npm start`
3. 在網址打`http://localhost:3000`

## 相關位置

* `public/` 裡面放一些靜態檔案 ex. images(圖片), javascripts(JS), stylesheets(CSS)
* `public/web/` 裡面放的是會用到的html
* `views/main.jade` 是開始畫面`http://localhost:3000/`會進入的地點
  * 點擊登入(Login)後就會跑去讀取public/web/裡面的html   ex. main.html

> 接下來就考驗接後端的功力了.

## 參考網址

* [Express Generator](http://expressjs.com/zh-tw/starter/generator.html)

