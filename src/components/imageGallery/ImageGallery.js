import React from 'react'
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem'

const ImageGallery = ({galleryItems, handleClick}) => (
    <ul className="ImageGallery">
        {galleryItems.map(item => (<ImageGalleryItem key={item.id} item={item} handleClick={handleClick}/>))}
    </ul>
    
);

export default ImageGallery;