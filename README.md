## So what is this thing

Layerage lets you create collages of r/Layer which are similar to each other.

## What is r/layer

[r/Layer](https://www.reddit.com/r/Layer/) was a community canvas for creative exploration open to everyone to create and contribute similar to r/place. Built by Reddit in partnership with Adobe.

## Why

I was just so intrigued by the creativity and granularity of the layers that I had to experiment on it on my free time. Initially I built a tool to explore all those layers by zooming in and out (video) but then switched to fiddling on this tool which could be more accessible for everyone.

## What can you do here

You can search for your / a layer and hit build to create a fancy looking collage of similar layers. The size of the canvas will be automatically adjusted to you screen dimension and scaled to fit your browser window. So if you want to create a desktop or mobile background you are already set. There are some options to tweak the collage in the menu, like the canvas dimension, size and number of the layers. If you feel lucky you can hit the random button which will select a random set. On mobile you can just shake your phone to do that.

## How does it work

Let’s say you have all the layers which are public and you run some neural nets over them to calculate a similarity. Now look for a layer in this pool and select x amount of similar layers, distribute them to fit the canvas dimensions and voila you have a collage.

## Moar details

*   scrape all the metadata and layers run a neural net (inception / mobilenet) on each layer to get an ["imprint"](https://observablehq.com/@cpietsch/imagenet-activation-logit) of it
*   run dimensionality reduction on all those imprints ([tSNE](https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations) / [UMAP](https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations/2)) to distribute the layers by similarity in 2D
*   prototype on [observable notebook](https://observablehq.com/d/6dcb7448c060af1c)
*   build a frontend tool with vuejs and fiddle around a lot

## Wouldn’t it be cool to…

Sure thing! The code is on [GitHub](https://github.com/cpietsch/layerage) and is open source, so you can contribute by adding a feature or suggest something in a ticket.

## What else

Initially I did a timelapse while r/layer was running

<iframe src="https://www.youtube.com/embed/MtW1U5d6zHI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>

Shout out to u/youngluck for the support

You can buy me a virtual coffee by beeing a [GitHub Sponsor](https://github.com/sponsors/cpietsch)

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
