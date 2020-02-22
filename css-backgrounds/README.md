# CSS Backgrounds

Some practices about CSS backgrounds, based on Eric Meyer's book [Colors, Backgrounds, and Gradients](http://shop.oreilly.com/product/0636920040859.do).

### HTML

The index.html file has the following structure:

 ```
<body>
    <div id="container">
        <div id="EjeY">
        </div>
        <div id="EjeX">
        </div>
    </div>
</body>

 ```

### CSS

I tried with a lot of options, but the most advanced at the end was:

```
#container{
    width: 60%;
    border: 5px dashed gray;
    height: 800px;
    margin: 10px auto 10px;
    background-color: peru;
    border-radius: 30px;
    padding: 40px;
    background-image: url(lanus.png);
    background-repeat: space;
    background-position: 33% 33%;
    background-size: 64px 64px;
    position: relative;
}
#EjeY{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    left: 66%;
    background-color: red;
}
#EjeX{
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    top: 66%;
    background-color: red;
}
```