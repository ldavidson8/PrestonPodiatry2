module.exports = (config) => {
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
