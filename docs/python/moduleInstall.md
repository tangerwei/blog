---
title: Install Python Modules
categories:
- 编程语言
tags:
- Python
- pip
---

:::tip
 pip从python3.4之后就是默认的包安装工具， 包安装的虚拟环境：venv(3.5版本之后建议使用venv创建[虚拟环境](https://packaging.python.org/tutorials/installing-packages/#creating-virtual-environments))， virtualenv，包仓库 [Python Packaging Index](https://pypi.org/)
:::

<!--more-->

### pip介绍

#### 用法

```sh
python -m pip install SomePackage
```

:::tip

1. 对于POSIX用户（包括Mac OS X和Linux用户），本指南中的示例假定使用虚拟环境。
2. 对于Windows用户，本指南中的示例假定在安装Python时选择了调整系统PATH环境变量的选项。
3. 编译环境的之引用路径
    + 默认路径-全局
    + 虚拟路径，并带有详细描述符-局部
    + 两者的优缺点一目了然，并且这种优缺点在所有的语言中都存在，前者安装一次即可，全局可以使用，但是，依赖系统过大，如果换一个系统，这个项目就无法正常启动，需要额外的环境部署，后者虚拟环境有统一描述文件，不依赖系统。所以如果想要移植的项目使用第二种方式(PS：不需要移植的项目还是项目吗？)
:::

#### 扩展用法

##### 指定版本，或者指定最小版本

```sh
python -m pip install SomePackage==1.0.4    # specific version
python -m pip install "SomePackage>=1.0.4"  # minimum version
```

##### 包升级

```sh
python -m pip install --upgrade SomePackage
```
