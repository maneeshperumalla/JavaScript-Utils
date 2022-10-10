import { useState } from 'react';

const mouseHoverEvents = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const eventHandlerProps = {
    onMouseEnter: (event) => {
      if (!isHovering) {
        setIsHovering(true);
      }
      event.stopPropagation();
      if (props.onMouseEnter) {
        props.onMouseEnter(event);
      }
    },

    onMouseLeave: (event) => {
      if (!isHovering) {
        setIsHovering(false);
      }
      if (props.onMouseLeave) {
        props.onMouseLeave(event);
      }
    },
  };
  return [isHovering, eventHandlerProps];
};

export default mouseHoverEvents;
