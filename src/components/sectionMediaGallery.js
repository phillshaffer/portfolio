import {h, render, Component } from 'preact';
import {Image} from '../components/image';

export class SectionMediaGallery extends Component {
  constructor(props) {
    super(props);
    this.getMediaGalleryWidth = this.getMediaGalleryWidth.bind(this);
    this.getMediaGalleryPadding = this.getMediaGalleryPadding.bind(this);
    this.getGalleryItemWidth = this.getGalleryItemWidth.bind(this);
    this.getMediaGalleryMaxColumns = this.getMediaGalleryMaxColumns.bind(this);
  };

  getMediaGalleryWidth (width) {
    let windowWidth = window.innerWidth;

    if (width >= windowWidth) {
      let newWidth = windowWidth - 32;
      return newWidth;
    }
    else {
      return width;
    }

  }

  getMediaGalleryPadding (width) {
    let windowWidth = window.innerWidth;

    if (width == windowWidth) {
      return 0;
    }
    else {
      return '0px 16px 0px 16';
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
    else if (width <= 600) {
      return 2;
    }
    else if (width <= 900) {
      return 3;
    }
    else if (width <= 1200) {
      return 5;
    }
    else {
      return;
    }

  };

  render(props, state) {

    const componentInlineStyle = {
      SectionMediaGallery: {
        maxWidth: this.getMediaGalleryWidth(props.width) + 'px',
        padding: this.getMediaGalleryPadding(props.width) + 'px',  //used to override padding for full width gallerys
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      },
      SectionMediaGallery__galleryItem: {
        width: this.getGalleryItemWidth(this.getMediaGalleryWidth(props.width), props.galleryItems.length) - (props.galleryItemPadding * 2) + 'px',
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