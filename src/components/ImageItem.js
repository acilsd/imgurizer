import React from 'react';
import { Link } from 'react-router';

const ImageItem = (props) => {
  const {
          link,
          id,
          is_album,
          animated,
          cover,
          mp4,
          title,
          topic,
          ups,
          views
       } = props;

  const preview = `https://i.imgur.com/${id}h.jpg`;
  const albumCover = `https://i.imgur.com/${cover}.jpg`;
  const albumLink = `https://i.imgur.com/a/${id}`;
  const url = 'https://imgur.com/gallery/';

  let content;
  if (!is_album && !animated) {
    content = (
      <div class="image-item">
        <img class="image-item__image" src={preview}/>
        <div class="image-item__description">
          <div class="item-description__section">
            <span class="item-description__title">{title}</span>
            <span class="item-description__text">{topic}</span>
            <span class="item-description__text">Type: Image</span>
            <a href={`${url}${id}`} target="_blank">Imgur link</a>
          </div>
        </div>
      </div>
    );
  } else if (is_album) {
    content  = (
      <div class="image-item">
        <img class="image-item__image" src={albumCover}/>
        <div class="image-item__description">
          <div class="item-description__section">
            <span class="item-description__title">{title}</span>
            <span class="item-description__text">{topic}</span>
            <span class="item-description__text">Type: Album</span>
            <a href={link} target="_blank">Imgur link</a>
          </div>
        </div>
      </div>
    );
  } else if (animated) {
    content = (
      <div class="image-item">
        <video class="image-item__video" preload='auto' autoPlay='autoplay' loop='loop'>
          <source src={mp4} type='video/mp4'></source>
        </video>
        <div class="image-item__description">
          <div class="item-description__section">
            <span class="item-description__title">{title}</span>
            <span class="item-description__text">{topic}</span>
            <span class="item-description__text">Type: Animated</span>
            <a href={`${url}${id}`} target="_blank">Imgur link</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    content
  );
};

export default ImageItem;
