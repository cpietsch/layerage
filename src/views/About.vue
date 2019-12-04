<template>
  <div class="about">
    <div class="inner">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D2BqYwQVLXk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>What is Layerage</h2>
      <p>
        Layerage lets you create collages of r/Layer which are similar to each
        other.
      </p>

      <h2>Why</h2>
      <p>
        I was just so intrigued by the creativity and granularity of the layers that I had to experiment on it.
        Initially I built a tool to explore all those layers by
        <a
          href="https://vikusviewer.fh-potsdam.de/"
          target="_blank"
        >zooming in and out</a> but then switched to fiddling on this tool which could be more accessible for everyone.
      </p>

      <h2>What is r/layer</h2>
      <p>
        <a target="_blank" href="https://www.reddit.com/r/Layer/">r/Layer</a> was a community canvas for creative exploration open to everyone
        to create and contribute similar to r/place, built by Reddit in partnership with Adobe.
      </p>

      <h2>What can you do here</h2>
      <p>
        You can search for your / a layer and hit build to create a fancy
        looking collage of similar layers. The size of the canvas will be
        automatically adjusted to you screen dimension and scaled to fit your
        browser window. So if you want to create a desktop or mobile background
        you are already set. There are some options to tweak the collage in the
        menu, like the canvas dimension, size and number of the layers. If you
        feel lucky you can hit the random button which will select a random set.
        On mobile you can just shake your phone to do that.
      </p>
      <h2>How does it work</h2>
      <p>
        Let’s say you have all the layers which are public and you run some
        neural nets over them to calculate a similarity. Now look for a layer in
        this pool and select x amount of similar layers, distribute them to fit
        the canvas dimensions and voila you have a collage.
      </p>

      <h2>Moar details</h2>

      <ul>
        <li>
          scrape all the metadata and layers run a neural net (inception /
          mobilenet) on each layer to get an
          <a
            target="_blank"
            href="https://observablehq.com/@cpietsch/imagenet-activation-logit"
          >"imprint"</a> of it
        </li>
        <li>
          run dimensionality
          reduction on all those imprints (
          <a
            target="_blank"
            href="https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations"
          >tSNE</a> /
          <a
            target="_blank"
            href="https://observablehq.com/@cpietsch/t-sne-for-imagenet-activations/2"
          >UMAP</a>) to distribute the layers
          by similarity in 2D
        </li>
        <li>
          prototype on
          <a
            target="_blank"
            href="https://observablehq.com/@cpietsch/collage-of-of-r-layer"
          >observable notebook</a>
        </li>
        <li>build a frontend tool with vuejs and fiddle around a lot</li>
      </ul>

      <h2>Wouldn’t it be cool to…</h2>
      <p>
        Sure thing! The code is on
        <a
          target="_blank"
          href="https://github.com/cpietsch/layerage"
        >GitHub</a> and is open source, so you can
        contribute by adding a feature or suggest something in a ticket.
      </p>

      <h2>Learnings</h2>
      <p>
        Running tSNE on that many vectors (around 50000x1000) can make your system swet. I was running into memory issues so I went with the WebGL version of
        <a
          href="https://github.com/tensorflow/tfjs-tsne"
          target="_blank"
        >TFJS-TSNE</a>.
        Also the UMAP implementation of the
        <a
          href="https://github.com/YaleDHLab/pix-plot/blob/master/utils/process_images.py"
          target="_blank"
        >YaleDHLab</a> was helpful. Still there could be a lot finetuning to be done. Lastly, self motivation is hard. Doing the initial experiments on
        <a
          target="_blank"
          href="https://observablehq.com/@cpietsch/collage-of-of-r-layer"
        >observable</a> was fun and quick, but developing this app took quite some time.
      </p>

      <h2>What else</h2>
      <p>Initially I did some timelapses while r/layer was running</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MtW1U5d6zHI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>Shout out to u/youngluck for the support and the video cutting</p>
      <p>
        You can support me by beeing a
        <a
          target="_blank"
          href="https://github.com/sponsors/cpietsch"
        >GitHub Sponsor</a>
      </p>
      <p>
        2019 Christopher Pietsch
        <a
          target="_blank"
          href="https://twitter.com/chrispiecom"
        >@chrispiecom</a>
      </p>
    </div>
  </div>
</template>
<style scoped>
.about {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  margin: 0;
}
.inner {
  max-width: 560px;
  width: 100%;
  margin: 20px;
  padding-bottom: 3em;
}
iframe {
  max-width: 560px;
  width: 100%;
}
h2 {
  margin-bottom: 0em;
}
p {
  margin-top: 0.2em;
}
</style>
