# uniapp-learning
## 介绍

跟的是[b站黑马教程视频](https://www.bilibili.com/video/BV1BJ411W7pX?p=2&vd_source=e5bdcaeea2066e6b5c93b327c2391508)，有兴趣的可以看下

## 笔记

### p2 环境搭建并创建项目运行

无脑跟着老师一步步做就行

1. 安装HBuilderX

2. 安装微信开发者工具

3. 打开HbuilderX，新建uni-app项目hello-uni，采用默认模板

4. 在浏览器中运行项目。点击菜单-运行-->运行到浏览器-->Chrome即可

5. 在小程序模拟器中运行项目。点击菜单-运行-->运行到小程序模拟器-->微信开发者工具(w)。运行到微信小程序端需要注意两个问题：

   1. 如果是第一次使用微信小程序端运行，需要先配置小程序ide的相关路径。具体来说，按上述操作点击后，会出现以下界面

      <img src="E:\uniapps\uniapp-learning\images\第一次运行到微信小程序端.jpg" alt="第一次运行到微信小程序端" style="zoom:50%;" />

      我们浏览找到本地微信开发者工具的路径，确认即可。

   2. 此时uniapp可能会报错： [error] IDE service port disabled。原因是微信小程序的应用端口没有打开，我们需要设置打开。在微信开发者工具中点击菜单-设置-->安全设置-->服务端口-打开。

6. 在安卓端运行项目。第一次运行在真机上需先下载真机模拟插件，点击菜单-运行-->运行到手机或模拟器-->下载真机模拟器，点击会自动开始下载，在下载完成后，再次点击该选项即可

### p3，4  项目目录和开发规范简单介绍

详情看[官网介绍](https://uniapp.dcloud.net.cn/tutorial/project.html)

### p5 创建新页面和页面的配置

1. 在pages下新建目录message,在该目录下新建message.vue，在该vue模板中随便写点内容

2. 打开pages.json，在"pages"配置项的数组中添加一项：

   ```
   {
   			"path": "pages/message/message",
   			"style": {
   				"navigationBarTitleText": "hello",
   				"navigationBarBackgroundColor":"#007AFF"
   			}
   		},
   ```

   注意，该项要放在数组第一个索引位置才能看到效果

### p6 配置基本的tabbar

tabbar就是底层导航栏

注意：

1. 当设置position为top时，不会显示图标
2. tabbar中的list是一个数组，数组项数不能少于2个，也不能多于5个，tab按数组顺序依次显示

操作：

1. 在pages.json中添加tabbar配置项

   ```
   "tabBar": {
   		"list": [
   			{
   				"pagePath": "pages/index/index",
   				"text": "主页"
   			},
   			{
   				"pagePath": "pages/message/message",
   				"text": "信息"
   			}
   		],
   	}
   ```

2. 按P5创建一个connact页面，并添加到tabbar的list配置项中，记得pages配置项中也要添加该页面

### p7 tabbar的其他属性配置

详见[官方说明](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)，这节跳过

### p8 condition启动模式配置

启动模式配置仅开发期间生效，用于模拟直达页面的场景，如：从列表页跳转到详情页

1. 新建详情页detail，写入pages.json的pages配置项

2. 添加condition配置项

   ```
   "condition": {
   		"current": 0,
   		"list": [
   			{
   				"name": "detail",
   				"path": "pages/detail/detail",
   				"query": "id=80"
   			}
   		]
   	}
   ```

3. 刷新或者重启微信开发者工具，在编译选项中选择detail，即可看到页面自动跳转到detail页面

### p9 text组件的基本使用

三个基本属性：

1. selectable 设置文字能否被选中
2. space，设置每个空格所占空间大小。emsp为中文字符空格大小，ensp为中文字符空格一半大小，nbsp大小与字体大小有关
3. decode，即对一些特殊字符自动解码，如&amp； 则自动解码为&

### p10 view组件

view视图容器，类似于html中的div

四个基本属性：

1. hover-class:指定按下去的样式类
2. hover-stop-propagation:防止事件冒泡
3. hover-start-time:按住后多久出现点击态，单位毫秒
4. hover-stay-time：手机松开后点击态保留时间，单位毫秒

### p11 button组件

基本属性：

1. size:可选值：default和mini
2. type:可选值：primary,default,warn。primary在不同端显示的效果不同，微信小程序为绿色，APP，H5为蓝色；default为白色，warn为红色
3. plain:镂空效果（背景色透明）
4. disabled:按钮是否禁用
5. loading:名称前是否带loading图标

### p12 image组件

基本属性：

1. src，用法与html的src基本相同
2. mode。缩放图片的模式，有两种，一种是aspectFit，一种是aspectFill，共同点都是会保持纵横比缩放图片，aspectFit使图片的长边能完全显示出来，aspectFill使图片的短边能完全显示出来

默认不设置mode的话，默认图片宽高320*240。

### p13 样式的学习及如何使用SCSS字体图标

1. rpx，即响应式px,一种根据屏幕宽度自适应的动态单位，以750宽的屏幕为基准，750rpx正好为屏幕宽度。

2. @import，使用@import可以导入外联样式表，@import后要跟需要导入的外来样式表的路径，用;表示结束

3. uniapp支持常用选择器如id，class，element等，但是不支持*选择器

4. page标签相当于html中的body

5. 定义在app.vue中的样式为全局样式，作用于全部的页面；在pages目录下的vue文件中定义的样式为局部样式，只作用于对应的页面，并覆盖与app.vue中名字相同的选择器。

6. uniapp支持使用字体图标(ttf文件)，使用方式与web项目相同，但需要注意以下几点：

   1. 图标文件大小小于40KB，uniapp会自动将其转化为base64格式

   2. 若文件大小大于40KB，需开发者自己手动转换，否则不生效

   3. 图标文件的引用路径推荐使用-@开头的绝对路径，如

      ```
      @font-face{
      	font-family:test1-icon;
      	src:url('~@/static/iconfont.ttf');
      }
      ```

7. 如何使用scss/less。点击菜单-工具==>插件安装==>scss/sass编译。

### p14 数据绑定

学过vue，与vue中的数据绑定相同，故略过

### p15 v-bind和v-for

学过vue，故略过

### p16 如何注册事件和传递参数及获取事件对象

学过vue，故略过

### p17 生命周期

uniapp分为应用生命周期和页面生命周期。

**应用生命周期**

onLaunch:当uniapp初始化完成时触发，全局只触发一次

onShow:uniapp启动时或者从后台进入前台显示时

onHide:从前台进入后台时

onError:当应用报错时

**页面生命周期**

onLoad:监听页面加载。其参数为上个页面传递的数据，参数类型为Object，onLoad只执行一次

onShow:监听页面显示。页面每次出现在屏幕上都触发

onReady:监听页面初次渲染完成，第一次加载页面时，在onShow后触发

onHide:监听页面隐藏

onUnload:监听页面卸载

### p18 下拉刷新

开启下拉刷新：

- 需要在pages.json里，找到当前页面的pages节点，并在style选项中开启enablePullDownRefresh
- 通过调用uni.stopPullDownRefresh();

监听下拉刷新：

onPulldownRefresh:与页面生命周期同级，监听用户下拉动作，一般用于下拉刷新。

关闭下拉刷新：

uni.stopPullDownRefresh();

### p19 上拉加载

监听上拉加载：

onReachBottom：与页面生命周期同级，监听用户是否快要拉到底部。要设置拉到离底部多少距离时触发，在pages.json中，给指定的页面style配置项中添加："onReachBottomDistance": 100。这个距离是px单位，不设置时默认50。

### p20 发送get请求

使用uni.request方法来发送get请求，其中要配置url和成功的回调，如：

```
uni.request({
    url:"http://www.xxx.com/api/get...",
    success(res) {
    console.log('get',res);
}
})
```

这里我们借鉴了[jingyu同学的解决方法](https://gitee.com/jingyu7/uniapp_shop)，采用本地返回json文件的形式来模拟响应,具体来说是这样的，

1. 在static目录下新建api目录，在api目录下新建getlunbo.json，打开该文件并写入以下内容：

   ```
   {
   	"status":0,
   	"message":[
   		{
   			"id":1,
   			"url":"",
   			"img":"/static/imgs/2021-08-08 221530.png"
   		},
   		{
   			"id":2,
   			"url":"",
   			"img":"/static/imgs/2021-08-08 221559.png"
   		},
   		{
   			"id":3,
   			"url":"",
   			"img":"/static/imgs/2021-08-08 221617.png"
   		},
   		{
   			"id":4,
   			"url":"",
   			"img":"/static/imgs/2021-08-08 221637.png"
   		}
   	]
   }
   ```

2. 发送请求的写法：

   ```
   uni.request({
           url:"http://localhost:8080/static/api/getlunbo.json",
           success(res) {
           console.log('get',res);
       }
   })
   ```

   在触发该请求的发送后，控制台可以看到返回的res:

   ![get请求](E:\uniapps\uniapp-learning\images\get请求.jpg)

   如果在微信小程序端发送失败，可能是本地过滤了非合法域名的请求，在微信开发者工具里找到“详情”，切换到“本地设置”，将“不校验合法域名，webview....”那一项给它勾上。

   ### p21 数据缓存

   参考[官方文档](https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage)

   ### p22 图片的上传与预览

   参考[官方文档](https://uniapp.dcloud.net.cn/api/media/image.html)

   ### p23 条件编译跨端兼容

   在注释中写特定内容，如

   ```
   		<!-- #ifdef H5 -->
   		<view>只在h5中显示</view>
   		<!-- #endif -->
   		<!-- #ifdef MP-WEIXIN -->
   		<view>只在小程序中显示</view>
   		<!-- #endif -->
   		
   		test(){
           // #ifdef H5
           console.log('只在h5打印');
           // #endif
           // #ifdef MP-WEIXIN
           console.log('只在小程序打印');
           // #endif
           }
           
           /* #ifdef H5 */
           .box1{
               background-color: #fff;
           }
           /* #endif */
           /* #ifdef MP-WEIXIN */
           .box1{
               background-color: #fff;
           }
           /* #endif */
   ```

   ### p24 导航跳转

   **声明式跳转**

   利用导航组件navigator进行跳转，如：

   ```
   <navigator url="/pages/index/index" open-type="switchTab">跳转至主页</navigator>
   <navigator url="/pages/list/list">跳转至列表页</navigator>
   <navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
   ```

   说下三者区别：

   1. 普通的只设置了url的navigator，可以跳转至非tabbar里的页面，如第二种跳转
   2. 对于需要跳转至属于tabbar的页面，需要设置open-type为switchTab，如第一种跳转。需要注意，如果是非tabbar页面跳转tabbar页面，那么非tabbar页面会被卸载掉。
   3. 对于需要跳转后卸载跳转之前的页面的，需要设置open0type为redirect，如第三种跳转

   **编程式跳转**

   直接调用navigator对象上的方法进行跳转，如：

   ```
   toIndex(){
       uni.switchTab({
       url:'/pages/index/index'
   });
   },
   toList(){
       uni.navigateTo({
       url:'/pages/list/list'
   })
   },
   toDetail(){
       uni.redirectTo({
       url:'/pages/detail/detail'
   })
   }
   ```

   其效果与声明式导航相同，不再赘述。

   

   ### p25 组件的创建

   组件的注册与使用，以及组件的生命周期与vue是相同的，学过vue所以这里略过

   （这里格式好像不太对...无所谓了）

### p26 组件间的通讯方式

父给子传递参数用props，子给父传递参数用自定义事件，这与vue项目中的做法是相同的

兄弟之间是用uni.$emit和uni.$on来实现全局的自定义事件，这与vue项目中的全局总线的思路是相似的

至此，项目之前的基础知识已了解完毕，下面开始跟着老师搞项目，开发过程中的踩坑记录放在[这里](./黑马商城.md)
