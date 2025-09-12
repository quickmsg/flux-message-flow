# GitHub Pages 404 故障排除指南

## 当前问题
- gh-pages 分支有编译后的内容
- 访问 `https://quickmsg.github.io/flux-message-flow/` 仍然404

## 解决步骤

### 1. 检查 GitHub Pages 设置

**进入仓库设置**：
1. 进入您的 GitHub 仓库
2. 点击 **Settings** 标签
3. 滚动到 **Pages** 部分

**检查 Source 设置**：
- 如果显示 "Deploy from a branch"，选择 **gh-pages** 分支
- 如果显示 "GitHub Actions"，需要改为 "Deploy from a branch"

**正确的设置应该是**：
```
Source: Deploy from a branch
Branch: gh-pages / (root)
```

### 2. 检查 gh-pages 分支内容

**确认分支存在**：
```bash
git branch -a
# 应该能看到 gh-pages 分支
```

**检查分支内容**：
```bash
git checkout gh-pages
ls -la
# 应该能看到 index.html 和其他构建文件
```

### 3. 手动触发重新部署

**方法1：重新推送 gh-pages 分支**
```bash
git checkout gh-pages
git commit --allow-empty -m "Trigger GitHub Pages rebuild"
git push origin gh-pages
```

**方法2：删除并重新创建 gh-pages 分支**
```bash
git push origin --delete gh-pages
git checkout main
# 重新运行 GitHub Actions 部署
```

### 4. 检查构建输出

**确认构建文件正确**：
- `index.html` 应该存在
- 所有静态资源路径应该正确
- 没有路径错误

### 5. 等待缓存清除

**GitHub Pages 缓存**：
- GitHub Pages 有缓存机制
- 更改后可能需要等待 5-10 分钟
- 尝试强制刷新：Ctrl+F5 或 Cmd+Shift+R

### 6. 检查仓库权限

**确认仓库设置**：
- 仓库必须是公开的（除非有 GitHub Pro）
- 确保有正确的推送权限

## 常见问题

### 问题1：Source 设置错误
**症状**：gh-pages 分支有内容，但页面404
**解决**：将 Source 改为 "Deploy from a branch"，选择 gh-pages 分支

### 问题2：分支名称错误
**症状**：部署成功但页面404
**解决**：确认分支名称是 `gh-pages`，不是 `gh_pages` 或其他

### 问题3：路径问题
**症状**：根路径可以访问，子路径404
**解决**：检查 vite.config.ts 中的 base 配置

### 问题4：缓存问题
**症状**：设置正确但页面不更新
**解决**：等待缓存清除，或强制刷新

## 验证步骤

### 1. 检查 GitHub Pages 状态
- 进入仓库 Settings > Pages
- 查看是否有绿色勾号表示部署成功
- 查看部署时间是否是最新的

### 2. 检查 gh-pages 分支
```bash
git checkout gh-pages
ls -la
cat index.html | head -20
```

### 3. 测试访问
- 访问 `https://quickmsg.github.io/flux-message-flow/`
- 如果还是404，尝试访问 `https://quickmsg.github.io/`
- 检查浏览器开发者工具的网络面板

## 如果问题仍然存在

### 联系 GitHub 支持
如果以上步骤都尝试过，问题仍然存在：
1. 访问 GitHub 支持页面
2. 报告 GitHub Pages 部署问题
3. 提供仓库链接和错误描述

### 替代方案
如果 GitHub Pages 持续有问题：
1. 考虑使用其他静态网站托管服务
2. 如 Netlify、Vercel 等
3. 这些服务通常更稳定
