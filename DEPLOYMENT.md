# GitHub Pages 部署指南

本项目已配置GitHub Actions自动部署到GitHub Pages。

## 部署步骤

### 1. 启用GitHub Pages

1. 进入你的GitHub仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**


### 2. 推送代码

将代码推送到 `main` 或 `master` 分支：

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### 3. 查看部署状态

1. 进入仓库的 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待构建和部署完成

### 4. 访问网站

部署完成后，你的网站将在以下地址可用：
- `https://quickmsg.github.io/` (根域名)
- 如果使用子路径：`https://quickmsg.github.io/flux-message-flow/`

## 配置说明

### GitHub Actions 工作流

工作流文件位于 `.github/workflows/deploy.yml`，包含以下步骤：

1. **构建阶段**：
   - 检出代码
   - 设置Node.js环境
   - 安装依赖
   - 构建项目
   - 上传构建产物

2. **部署阶段**：
   - 部署到GitHub Pages
   - 设置环境变量

### Vite 配置

`vite.config.ts` 已配置：
- 生产环境基础路径：`/` (根路径)
- 构建输出目录：`dist`
- 代码分割优化
- 资源压缩

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在DNS设置中添加CNAME记录：
   ```
   your-domain.com CNAME [你的用户名].github.io
   ```

3. 在GitHub Pages设置中启用自定义域名

## 故障排除

### 构建失败

#### Terser 错误
如果遇到 "terser not found" 错误：
- 已修复：将 `minify: 'terser'` 改为 `minify: 'esbuild'`
- esbuild 是 Vite 的默认压缩器，无需额外安装

#### 其他构建问题
1. 检查Node.js版本兼容性
2. 确保所有依赖都已正确安装
3. 查看Actions日志中的错误信息
4. 检查是否有TypeScript类型错误

### 页面无法访问

#### 404 错误
如果访问 `https://quickmsg.github.io/` 出现404错误：

1. **检查GitHub Pages设置**：
   - 进入仓库的 **Settings** > **Pages**
   - 确认 **Source** 设置为 **GitHub Actions**
   - 确认 **Custom domain** 为空（除非使用自定义域名）

2. **检查Actions部署状态**：
   - 进入 **Actions** 标签
   - 查看最新的部署是否成功
   - 如果失败，查看错误日志

3. **等待部署完成**：
   - GitHub Pages部署通常需要几分钟
   - 刷新页面或清除浏览器缓存

4. **检查URL路径**：
   - 确保访问的是完整URL：`https://quickmsg.github.io/`
   - 注意末尾的斜杠

#### 其他访问问题
1. 确认GitHub Pages已启用
2. 检查仓库设置中的Pages配置
3. 等待几分钟让DNS传播
4. 检查仓库是否为公开仓库

### 资源加载失败

1. 检查vite.config.ts中的base路径配置
2. 确认所有静态资源路径正确
3. 检查浏览器控制台错误

## 环境变量

如果需要设置环境变量，可以在GitHub仓库设置中添加：

1. 进入 **Settings** > **Secrets and variables** > **Actions**
2. 添加所需的仓库变量或密钥

## 性能优化

项目已配置以下优化：

- 代码分割（vendor、router、ui chunks）
- 资源压缩
- 静态资源缓存
- 构建产物优化

## 更新部署

每次推送到主分支都会自动触发新的部署。你也可以手动触发：

1. 进入 **Actions** 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 **Run workflow**
