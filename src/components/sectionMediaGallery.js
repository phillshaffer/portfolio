import {h, render, Component } from 'preact';
import {Image} from '../components/image';

export class SectionMediaGallery extends Component {
  constructor(props) {
    super(props);
    this.getImageAreaWidth = this.getImageAreaWidth.bind(this);
    this.getMaxColumns = this.getMaxColumns.bind(this);
  }

  getImageAreaWidth(imageGalleryWidth, imageCount) {
    let maxColumnsAllowed = this.getMaxColumns(imageGalleryWidth);

    if (imageCount < maxColumnsAllowed ) {
      return imageGalleryWidth / imageCount
    }
    else if (imageCount > maxColumnsAllowed) {
      return imageGalleryWidth / maxColumnsAllowed
    }  
    else {
      return imageGalleryWidth / imageCount
    }

  };

  getMaxColumns(width) {

    if (width <= 400) {
      return 1
    }
    if (width <= 600) {
      return 2
    }
    if (width <= 900) {
      return 3
    }
    if (width <= 1200) {
      return 5
    }
    else {
      return
    }

  };

  render(props, state) {

    const componentInlineStyle = {
      SectionMediaGallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        maxWidth: props.width + 'px',
        padding: props.galleryPadding + 'px',  //used to override padding for full width gallerys
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      },
      SectionMediaGallery__imageArea: {
        width: this.getImageAreaWidth(this.props.width, this.props.images.length) - (props.imagePadding * 2) + 'px',
        height: 'auto',
        padding: props.imagePadding + 'px'
      }
    };

    const images = props.images.map((image) => (
      h('div', {className: 'SectionMediaGallery__imageArea', style: componentInlineStyle.SectionMediaGallery__imageArea},
        h(Image, {image: image})
      )
    ));

    return h('div', {className: 'SectionMediaGallery', style: componentInlineStyle.SectionMediaGallery}, images);

  };
};