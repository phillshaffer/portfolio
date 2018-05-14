import {h, render, Component } from 'preact';
import {Image} from '../components/image';

export class SectionMediaGallery extends Component {
  constructor(props) {
    super(props);
    this.setMediaGalleryPadding = this.setMediaGalleryPadding.bind(this);
    this.getGalleryItemWidth = this.getGalleryItemWidth.bind(this);
    this.getMediaGalleryMaxColumns = this.getMediaGalleryMaxColumns.bind(this);
  }

  setMediaGalleryPadding (width) {
    let windowWidth = window.innerWidth;

    if (width == windowWidth) {
      return 0;
    }
    else {
      return;
    }

  };

  getGalleryItemWidth(mediaGalleryWidth, galleryItemCount) {
    let maxColumnsAllowed = this.getMediaGalleryMaxColumns(mediaGalleryWidth);

    if (galleryItemCount < maxColumnsAllowed) {
      return mediaGalleryWidth / galleryItemCount;
    }
    else if (galleryItemCount > maxColumnsAllowed) {
      return mediaGalleryWidth / maxColumnsAllowed;
    }  
    else {
      return mediaGalleryWidth / galleryItemCount;
    }

  };

  getMediaGalleryMaxColumns(width) {

    if (width <= 400) {
      return 1;
    }
    if (width <= 600) {
      return 2;
    }
    if (width <= 900) {
      return 3;
    }
    if (width <= 1200) {
      return 5;
    }
    else {
      return;
    }

  };

  render(props, state) {

    const componentInlineStyle = {
      SectionMediaGallery: {
        maxWidth: props.width + 'px',
        padding: this.setMediaGalleryPadding(props.width) + 'px',  //used to override padding for full width gallerys
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      },
      SectionMediaGallery__galleryItem: {
        width: this.getGalleryItemWidth(props.width, props.galleryItems.length) - (props.galleryItemPadding * 2) + 'px',
        padding: props.galleryItemPadding + 'px'
      }
    };

    const galleryItems = props.galleryItems.map((galleryItem) => (
      h('div', {className: 'SectionMediaGallery__galleryItem', style: componentInlineStyle.SectionMediaGallery__galleryItem},
        h(Image, {image: galleryItem})
      )
    ));

    return h('div', {className: 'SectionMediaGallery', style: componentInlineStyle.SectionMediaGallery}, galleryItems);

  };
};