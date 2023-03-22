import React from 'react';
import ImageMapper from 'react-img-mapper';
import image from './map.jpg'
import url from './data.json'

function Map({handlerSelected}) {
    return (
        <ImageMapper  onClick={(e) => handlerSelected(e.name)} src={image} map={url} width={800} imgWidth={1000}/>
    );
}

export default Map;