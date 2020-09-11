// 引入css的形式使用antd组件
import React, { Component } from "react";
// import Button from 'antd/lib/button';
import { Button } from "antd";
import "./App.css";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
        );
    }
}
export default App;
