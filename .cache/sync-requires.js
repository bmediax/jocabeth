
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/bmediax/Desktop/Develop/jocabeth/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bmediax/Desktop/Develop/jocabeth/src/pages/index.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/bmediax/Desktop/Develop/jocabeth/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/bmediax/Desktop/Develop/jocabeth/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/bmediax/Desktop/Develop/jocabeth/src/templates/using-dsg.js"))
}

