import '../style/image-component.css';

export default () => {
  const image = document.createElement('img');
  image.src = 'http://lorempixel.com/400/400';

  const container = document.getElementById('container');
  container.appendChild(image);
};
