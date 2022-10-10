/* 
readyState returns the state XMLHttpRequest client is in
status returns response status codes
*/

const fetchApiWithPromise = (apiUrl) => {
  return new Promise((resolve, reject) => {
    const api = new XMLHttpRequest();
    api.addEventListener('readystatechange', () => {
      if (api.readyState === 4 && api.status === 200) {
        const data = JSON.parse(api.responseText);
        resolve(data);
      } else if (api.readyState === 4) {
        reject('API failed');
      }
    });
    api.open('GET', apiUrl);
    api.send();
  });
};

export default fetchApiWithPromise;
