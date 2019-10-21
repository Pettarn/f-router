#### router-view 如何知道它该渲染哪个组件？假设hash值是两层，第一层的router-view：hash.indexOf遍历一遍第一层的路由表, 只要值不等于 0 那么就排除掉，然后为该router-view设置 children表 ; 第二层的router-view：它能拿到父组件的 children表 , 直接hash.indexOf遍历一遍 children表 筛选出来一个数组matched<Array>，如果 hash.indexOf(它的父组件的path + 遍历matched) === -1 那么就淘汰

#### historyRecord : state     router 实例拥有一个 history 属性，它能够push

#### this.$router.push()
#### 如果链接是一个相对路径怎么处理, 现在假设只允许开发者填写绝对路径

#### 重定向，拿到要重定向的路径片段，替换被重定向的片段，/a/b -> /c/b           
    location.href.replace(matched[0].path, matched[0].redirect)

#### npm 如何ignore
        


localhost:8080/#/a/b

`/a`
<router-view> 
    `b`
    <router-view></router-view>
</router-view>
