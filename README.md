### 一个基于react + storybook 搭建的 react 物料仓库

### 使用lerna 对包进行管理
### 搭建过程
1. 新建react项目
```shell
npx create-react-app <your project name>
```
2. 进入项目
```shell
cd <your project name>
```
3. 添加storybook
```
npx -p @storybook/cli sb init
```

### 运行
```shell
npm run storybook
```

### 新增 && 发布
1. 新增一个包
```
npx lerna create <name>
```
2. 填写包的内容
3. link
```
npm run bootstrap
``` 
4. 发布 npm
```
npm run push
```




