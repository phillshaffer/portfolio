import {h, render, Component } from 'preact';
import {Image} from './image';

export class SectionMediaGallery extends Component {
  constructor(props) {
    super(props);
    this.getMediaGalleryWidth = this.getMediaGalleryWidth.bind(this);
    this.setMediaGalleryWidth = this.setMediaGalleryWidth.bind(this);
    this.getGalleryItemWidth = this.getGalleryItemWidth.bind(this);
    this.getMediaGalleryMaxColumns = this.getMediaGalleryMaxColumns.bind(this);
  };

  componentDidMount() {
    let self = this;
    window.addEventListener("load", function () {
      self.setMediaGalleryWidth(self.getMediaGalleryWidth());
    }, false);
    window.addEventListener("resize", function () {
      self.setMediaGalleryWidth(self.getMediaGalleryWidth());
    }, false);
  };

  componentWillUnmount() {
    window.removeEventListener('load');
    window.removeEventListener('resize');
  };


  getMediaGalleryWidth() {
    let windowWidth = window.innerWidth;
    let width = this.props.width;
    let style = window.getComputedStyle(document.getElementsByTagName('html')[0]);
    let cssWidth = parseInt(style.getPropertyValue('--subSection-maxWidth'));
    let rightLeftPadding = parseInt(style.getPropertyValue('--subSection-paddingRight')) + parseInt(style.getPropertyValue('--subSection-paddingLeft'));

    if (this.props.fullWidth) {
      return windowWidth - rightLeftPadding;
    }

    if (this.props.width) {
      if (width >= windowWidth) {
        return windowWidth - rightLeftPadding;
      }
      else {
        return width;
      }
    }
    else {
      return cssWidth;
    }
  }

  setMediaGalleryWidth(width) {
    let cssWidth = parseInt(window.getComputedStyle(document.getElementsByTagName('html')[0]).getPropertyValue('--subSection-maxWidth'));

    if (width == cssWidth) {
      return;
    }
    else {
      this.SectionMediaGallery.style.setProperty('--subSection-maxWidth', width + 'px');
      return width;
    }
  }

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
        marginTop: props.top + 'rem',
        marginBottom: props.bottom + 'rem'
      },
      SectionMediaGallery__galleryItem: {
        width: this.getGalleryItemWidth(this.getMediaGalleryWidth(), props.galleryItems.length) - (props.galleryItemPadding * 2) + 'px',
        padding: props.galleryItemPadding + 'px'
      }
    };

    const galleryItems = props.galleryItems.map((galleryItem) => (
      h('div', {class: 'SectionMediaGallery__galleryItem', style: componentInlineStyle.SectionMediaGallery__galleryItem},
        h(Image, {image: galleryItem})
      )
    ));

    return h('div', {class: 'SectionMediaGallery', ref: div => this.SectionMediaGallery = div, style: componentInlineStyle.SectionMediaGallery}, galleryItems);

  };
};