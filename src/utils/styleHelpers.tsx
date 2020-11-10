
export const getRelativeSizingInPXs = (value: number, media: media) => `${
  media.orientation == 'landscape' ? 
    media.height > 1440 ? value * 1440 / 900 : 
      media.height < media.width / 1.6 ? value * (media.width / 1.6) / 900 : value * media.height / 900 
  : value * (media.height / 1.6) / 900}`;

export const getStyling = (media: media) => {
  let styling = {
    padding: 0,
    cardBorderRadius: 0
  }

  if (media.size === 'xs') {
    styling.padding = 0;
    styling.cardBorderRadius = 0;
  }
  else if (media.size === 's') {
    if (media.orientation === "landscape") {
      styling.padding = 0;
      styling.cardBorderRadius = 0;
    }
    else {
      styling.padding = 20;
      styling.cardBorderRadius = 2;
    }
  }
  else if (media.size === 'm') {
    styling.padding = 20;
    styling.cardBorderRadius = 2;
  }
  else if (media.size === 'l') {
    styling.padding = 24;
    styling.cardBorderRadius = 4;
  }
  else if (media.size === 'xl') {
    styling.padding = 32;
    styling.cardBorderRadius = 6;
  }
  else if (media.size === 'xxl') {
    styling.padding = 44;
    styling.cardBorderRadius = 8;
  }

  return styling;
}