import React from 'react'

const ImageGalleryItem = ({item, handleClick}) => (
    <li className="ImageGalleryItem" >
  <img data-image={item.largeImageURL} src={item.webformatURL} alt="a" className="ImageGalleryItem-image" onClick={handleClick}/>
</li>
);

export default ImageGalleryItem;