import React from 'react'
import Header from '../components/Header'

import '../style/AboutView.scss'
import BottomComponment from '../components/Bottom'

export default class AboutView extends React.Component<any, any> {
    render() {
        return (
            <div className="About">
                <Header action="/about" />
                <div className="text contine">
                    <h2>《Love You Forever》是一个开源免费的游戏</h2>
                    <div>
                        <h3>关于项目</h3>
                        <p>
                            <i>Love You Forever</i> 是一个使用 Unity3D 开发的游戏<br />
                            游戏开源免费，仓库地址为<a href="https://github.com/UnityMeow/LoveYouForever">https://github.com/UnityMeow/LoveYouForever</a><br />
                        </p>
                    </div>
                    <div>
                        <h3>开发成员</h3>
                        <p>
                            <h5>Unity喵</h5>
                            <img className="headimage" alt="UnityMeow" src="https://avatars3.githubusercontent.com/u/51852307?s=100"></img>
                            <br />
                            主要开发者
                            <ul>
                                <li>
                                    GitHub:&nbsp;<a className="line" href="https://github.com/UnityMeow/">https://github.com/UnityMeow/</a>
                                </li>
                                <li>
                                    bilibili:&nbsp;<a className="line" href="https://space.bilibili.com/297963380/">Unity喵</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <BottomComponment className="bottom" absoult={true} />
            </div>
        )
    }
}