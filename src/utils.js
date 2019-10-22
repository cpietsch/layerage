export function makeUrl(id) { return `https://vikusviewer.fh-potsdam.de/layers/data/png/128c/${id}.png`; }
export function makeUrlBig(id) { return `https://vikusviewer.fh-potsdam.de/layers/data/png/256c/${id}.png`; }

export function loadImage(d) {
  return new Promise((resolve, error) => {
    const url = makeUrl(d.id);
    const image = new Image();
    image.onload = _ => resolve({ ...d, image })
    image.onerror = _ => resolve(null)
    image.crossOrigin = ''
    image.src = url
  })
}

export const global = {}