# [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

|      | sqrt `平方根`    | min `最小值`      |
| :--- | :--------------- | :---------------- |
|      | cbrt `立方根`    | max `最大值`      |
|      | log `对数`       | round `四舍五入`  |
|      | abs `取绝对值`   |                   |
|      | atan `反正切`    | ceil `天花板函数` |
|      | floor `地板函数` | pow `次方幂`      |
|      | PI `π派`         | trunc `去小数`    |

## [三角函数sin\cos\tan\cot角度计算](https://www.jianshu.com/p/069291bedbc8)

## 其他

- `~`  NOT运算符 反转所有位(先转32位进制整数后反转)

  ```js
  ~3 // -3
  ~~3.141592654 // 3
  parseInt() //去小数
  ```

# 已知起点坐标、角度、长度 `求终点坐标`

```js
//角度转弧度
var radian = (angle * Math.PI) / 180;
//计算新坐标 R 就是两者的距离
old_x + distance * Math.Cos(radian);
old_y + distance * Math.Sin(radian);
```

#  欧拉角 四元素 ...

https://malei0311.gitbooks.io/threejs-doc-cn/content/getstart/matrix_transformations.html