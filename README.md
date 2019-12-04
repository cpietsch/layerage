## What is Layerage

Layerage lets you create collages of r/Layer which are similar to each other.

## What is r/layer

[r/Layer](https://www.reddit.com/r/Layer/) was a community canvas for creative exploration open to everyone to create and contribute similar to r/place. Built by Reddit in partnership with Adobe.

## Why

I was just so intrigued by the creativity and granularity of the layers that I had to experiment on it on my free time. Initially I built a tool to explore all those layers by [zooming in and out](https://vikusviewer.fh-potsdam.de/) but then switched to fiddling on layerage which could be more accessible for everyone.

## What can you do here

You can search for your / a layer and hit build to create a fancy looking collage of similar layers. The size of the canvas will be automatically adjusted to you screen dimension and scaled to fit your browser window. So if you want to create a desktop or mobile background you are already set. There are some options to tweak the collage in the menu, like the canvas dimension, size and number of the layers. If you feel lucky you can hit the random button which will select a random set. On mobile you can just shake your phone to do that.

## How does it work

Let’s say you have all the layers which are public and you run some neural nets over them to calculate a similarity. Now look for a layer in this pool and select x amount of similar layers, distribute them to fit the canvas dimensions and voila you have a collage.

## Moar details

- scrape all the metadata and layers run a neural net (inception / mobilenet) on each layer to get an ["imprint"](https://observablehq.com/@cpietsch/imagenet-activation-logit) of it
- run dimensionality reduction on all those imprints ( [tSNE](https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations) / [UMAP](https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations/2)) to distribute the layers by similarity in 2D
- prototype on [observable notebook](https://observablehq.com/@cpietsch/collage-of-of-r-layer)
- build a frontend tool with vuejs and fiddle around a lot

## Wouldn’t it be cool to…

Sure thing! The code is on [GitHub](https://github.com/cpietsch/layerage) and is open source, so you can contribute by adding a feature or suggest something in a ticket.

## Learnings

Running tSNE on that many vectors (around 50000x1000) can make your system swet. I was running into memory issues so I went with the WebGL version of [TFJS-TSNE](https://github.com/tensorflow/tfjs-tsne). Also the UMAP implementation of the [YaleDHLab](https://github.com/YaleDHLab/pix-plot/blob/master/utils/process_images.py) helped. Still there could be a lot finetuning to be done. Lastly, self motivation is hard. Doing the initial experiments on observable was fun and quick, but developing this app took quite some time.

## What else

Initially I did some timelapses while r/layer was running
Shout out to u/youngluck for the support
You can buy me a virtual coffee by beeing a [GitHub Sponsor](https://github.com/sponsors/cpietsch)
2019 Christopher Pietsch [@chrispiecom](https://twitter.com/chrispiecom)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
