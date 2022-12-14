const yt = require('yt-converter')

module.exports = {}

module.exports.getmp3 = function(title, url) {
  yt.convertvideo({
    url: url,
    itag: 140,
    directorydownload: './',
    title: title,
  })
}

module.exports.getmp4 = function (title, url) {
  yt.convertvideo({
    url: url,
    itag: 136,
    directorydownload: './',
    title: title,
  })
}

module.exports.getTitle = async function(url) {
  let title
  await yt.getInfo(url).then((info) => {
    title = info.title
  })
  return title
}
