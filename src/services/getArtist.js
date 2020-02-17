export const getArtist = (id, offset) => {
  console.log(offset);
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json());
};

  
