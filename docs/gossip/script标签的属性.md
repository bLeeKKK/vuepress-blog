# &lt;script&gt;元素

* async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其
他脚本加载。只对外部脚本文件有效。
* charset：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不
在乎它的值。
* defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。
在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。