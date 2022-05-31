import React,{useEffect} from "react";
import {getImages} from "../services/api.js";
import {galleryActions} from "../store/gallerySlice.js";
import {useSelector,useDispatch} from "react-redux";

const GalleyPage=()=> {
  const images = useSelector(state => state.gallery.gallery);
  const dispatch = useDispatch();
  const addImages = async () => {
    let response = await getImages();
    console.log(response.photos);
    dispatch(galleryActions.setGallery(response.photos));
  }

  const renderImages = () => {
    return images.map((image, index) => {
      return (
        <div className="col-md-4" key={index}>
          <img src={image.src.small} alt={image.alt} />
          <h3>{image.alt}</h3>
        </div>
      );
    });
  }


  useEffect(() => {
    addImages();
  }, []);

  return (
   <div>
      <h1>Gallery</h1>
      {renderImages()}
   </div>
  )
}

export default GalleyPage;