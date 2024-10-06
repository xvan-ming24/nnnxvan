# 响应式Web设计

响应式布局页面：实现一套代码在不同的屏幕宽度下呈现不同的布局效果

## 媒体查询

使用方式：

（1）內联式

```
@media 媒体类型 and (媒体特性){
	CSS代码
}
简写：
@media(媒体特性){
	CSS代码
}
```

媒体类型：



- screen：屏幕
- print：打印预览
- speech：阅读器
- all:默认值，包括以上三种



媒体特性：

- 宽度、高度：width、height
- 最小宽度、高度：min-width、min-height
- 最大宽度、高度：max-width、max-height
- 屏幕方向：orientation

​	横向：landscape

​	竖向：portrait

```html
 <style>
        /* 超小屏幕 */
        @media screen  and (max-width: 575px){
                .container{
                    width: 100%;
                    background-color: aqua;
                    font-size: 12px;
                }
        }
          /*小屏幕  */
         @media screen  and (min-width: 576px){
                .container{
                    width: 540px;
                    background-color: rgb(180, 153, 63);
                    font-size: 14px;
                }
        }
        /* 中等屏幕 */
         @media screen  and (min-width: 768px){
                .container{
                    width: 720;
                    background-color: rgb(207, 25, 25);
                    font-size: 16px;
                }
        }
        /* 大屏幕 */
         @media screen  and (min-width: 1200px){
                .container{
                    width: 1140px;
                    background-color: rgb(207, 34, 106);
                    font-size: 18px;
                }
        }
        /* 超大屏幕 */
         @media screen  and (min-width: 1200px){
                .container{
                    width: 1140px;
                    background-color: rgb(177, 214, 45);
                    font-size: 20px;
                }
        }
        .container{
            height: 880px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
     <div class="container">
从前从前有个人爱你很久<br>
但偏偏风渐渐把距离吹得好远<br>
好不容易又能再多爱一天<br>
但故事的最后你好像还是说了拜拜<br>
为你翘课的那一天<br>
花落的那一天<br>
教室的那一间<br>
我怎么看不见<br>
消失的下雨天<br>
我好想再淋一遍<br>
没想到失去的勇气我还留着<br>
好想再问一遍<br>
你会等待还是离开<br>
刮风这天我试过握着你手<br>
但偏偏雨渐渐大到我看你不见<br>
还要多久我才能在你身边<br>
等到放晴的那天也许我会比较好一点<br>
从前从前有个人爱你很久<br>
偏偏风渐渐把距离吹得好远<br>
好不容易又能再多爱一天<br>
但故事的最后你好像还是说了拜拜<br>
刮风这天我试过握着你手<br>
但偏偏雨渐渐大到我看你不见<br>
还要多久我才能够在你身边<br>
等到放晴那天也许我会比较好一点<br>
从前从前有个人爱你很久<br>
但偏偏雨渐渐把距离吹得好远<br>
好不容易又能再多爱一天<br>
但故事的最后你好像还是说了拜拜<br></div>
```

（2）外联式

```html
<link rel="stylesheet" href="../css/bootstrap.min.css">
```



## Bootstrap

一个基于HTML、CSS、JS编写的Web前端框架，它将常见的效果统一封装后，形成一套代码，供开发者能够快速地搭建拥有响应式布局的页面

官方网站：https://www.bootcss.com/

### bootstrap的使用

1、下载boostrap的资源文件

2、整合需要使用的文件

3、引入boostarp

```html
  <!-- 引入bootstrap的样式 -->
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
    <!-- 引入bootstrap的js -->
    <script src="../bootstrap/js/bootstrap.min.js"></script>

```

4、使用示例

```html
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
```

