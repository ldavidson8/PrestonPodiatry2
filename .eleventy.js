const pluginSEO = require('eleventy-plugin-seo')

module.exports = (config) => {
  config.addPlugin(pluginSEO, {
    title: 'Preston Podiatry',
    description:
      'Preston Podiatry offers treatment, diagnosis and advice for the whole range of foot and lower limb related problems.',
    url: 'https://prestonpodiatry.co.uk/',
  })
  config.addPassthroughCopy('./src/public')
  config.addPassthroughCopy('./src/scripts')
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  }
}
