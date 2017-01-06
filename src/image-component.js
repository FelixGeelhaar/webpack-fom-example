require('../style/image-component.css');

const imageComponent = function() {
  const image = document.createElement('img');
  image.src = 'http://lorempixel.com/400/400';

  const container = document.getElementById('container');
  container.appendChild(image);
};

module.exports = imageComponent;
