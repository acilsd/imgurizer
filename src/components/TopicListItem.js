import React from 'react';
import { Link } from 'react-router';

const TopicListItem = (props) => {
  const { avatar, title, text, link } = props;

  let thumbnail;

  if (!avatar) { thumbnail = 'https://placehold.it/350x150?text=NO%20IMAGE'; }
  else { thumbnail = avatar.link; }

  return (
    <div class="topic-item">
      <Link to={`/${link}`}>
        <img src={thumbnail} class="topic-item__thumbnail" />
      </Link>
      <div class="topic-item__description">
        <h4>Category: {title}</h4>
        <p>{text}</p>
        <Link
          to={`/${link}`}
          class="btn btn--topic" >
          Show images
        </Link>
      </div>
    </div>
  );
};

export default TopicListItem;
