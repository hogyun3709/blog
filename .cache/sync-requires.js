// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/hogyunkim/Desktop/blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/hogyunkim/Desktop/blog/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-index-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/templates/index.jsx")),
  "component---src-templates-post-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/templates/category.jsx")),
  "component---src-templates-author-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/templates/author.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/hogyunkim/Desktop/blog/src/pages/about.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/offline-plugin-app-shell-fallback.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/index.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "rest-api-vs-graph-ql.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/rest-api-vs-graph-ql.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "tags-api.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/tags-api.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "categories-tech.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/categories-tech.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "author-hogyun.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/author-hogyun.json"),
  "layout-index.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/layout-index.json"),
  "about.json": require("/Users/hogyunkim/Desktop/blog/.cache/json/about.json")
}