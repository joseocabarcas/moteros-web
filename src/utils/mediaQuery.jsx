import React, { useState, useEffect } from 'react';

function useMedia(query) {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(
    () => {
      const media = window.matchMedia(query);
      if(media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    },
    [query]
  );
  return matches;
}

function Media(props) {
  const resp = useMedia(props.media);
  console.log(resp)
  return resp ? props.children : null
}

export default Media;