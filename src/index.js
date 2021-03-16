import React from "react";
import ReactDOM from "react-dom";
//导入bootstrap的样式
//使用插件Simple React Snippets 可以快速写react的一些代码片段
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));
