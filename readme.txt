 1："@types/node": "^12.12.5" 是类型定义文件 用于支持typescript的编码modules
 2：注意：node本身不认识typescript 所以需要把ts转换编译为es6|es5
 3：tsconfig.json 告诉编译器 如果 把ts转换编译为es6|es5
 4:监控服务器文件的变化 npm install -g nodemon  
 nodemon build/actionServe.js
 5:因为服务器文件和工程文件端口不同 无法正常调用接口
 新建proxy.conf.json 服务器代理配置文件
 设置配置"startProxy": "ng serve --proxy-config proxy.conf.json",