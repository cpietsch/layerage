export function makeUrl(id) {
  return `https://vikusviewer.fh-potsdam.de/layers/data/png/128c/${id}.png`;
}
export function makeUrlBig(id) {
  return `https://vikusviewer.fh-potsdam.de/layers/data/png/256c/${id}.png`;
}

export function loadImage(id) {
  return new Promise((resolve, error) => {
    const url = makeUrl(id);
    const image = new Image();
    image.onload = _ => resolve({ id, image });
    image.onerror = _ => {
      console.error("could not load", id);
      resolve({ id, image: null });
    };
    image.crossOrigin = "";
    image.src = url;
  });
}

export const global = {};
