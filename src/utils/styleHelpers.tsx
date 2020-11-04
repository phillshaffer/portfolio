
export const getRelativeSizingInPXs = (value: number, media: media) => `${
  media.orientation == 'landscape' ? 
    media.height > 1440 ? value * 1440 / 900 : 
      media.height < media.width / 1.6 ? value * (media.width / 1.6) / 900 : value * media.height / 900 
  : value * (media.height / 1.6) / 900}px`;