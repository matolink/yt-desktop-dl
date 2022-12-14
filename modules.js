import yt from 'yt-converter'

export function getmp3(title, url) {
  yt.convertvideo({
    url: url,
    itag: 140,
    directorydownload: './',
    title: title,
  })
}

export function getmp4(title, url) {
  yt.convertvideo({
    url: url,
    itag: 136,
    directorydownload: './',
    title: title,
  })
}

export async function getTitle(url) {
  let title
  await yt.getInfo(url).then((info) => {
    title = info.title
  })
  return title
}
