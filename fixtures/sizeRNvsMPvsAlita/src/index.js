/**
 * 定义Router的文件，被称为入口文件，由于小程序的页面必须预先定义在 app.json 文件，json文件是静态的，所以入口文件的处理发生在编译阶段
 * 这就要求入口文件需要足够的静态可分析。
 *
 * 具体对入口文件的限制，请参考：https://areslabs.github.io/alita/%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6.html
 */

import React, {PureComponent} from 'react'

/**
 * alita转化的项目必须使用：@areslabs/router 路由，详细文档：https://areslabs.github.io/alita/%E8%B7%AF%E7%94%B1.html
 */
import {Router, Route, TabRouter} from '@areslabs/router'

import Page1 from './Page1'
import CommonPage from './CommonPage'

import {f1} from './util'

f1()

export default class App extends PureComponent {

    render() {

        return (
            <Router
                wxNavigationOptions={{
                    // 小程序导航条配置
                    navigationBarTitleText: "HelloWorld",
                    navigationBarBackgroundColor: "#ffffff",
                    navigationBarTextStyle: "black",
                }}

                navigationOptions={{
                    // rn 导航条配置
                    title: 'HelloWorld'
                }}
            >
				{/*主包提取出公共部分*/}
				<Route key={"commonSize"} component={CommonPage}/>

				{/*分包用来测试体积*/}
                <Route subpage="one" key={"Page1"} component={Page1}/>
            </Router>
        )
    }
}