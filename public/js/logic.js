
const fetchData = (url, method, search, cb) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (Object.keys(response).length === 1) {
          cb('error', null);
        } else {
          cb(null, response);
        }
      }
    }
  };
  xhr.open(method, url);
  xhr.send(search);
};
