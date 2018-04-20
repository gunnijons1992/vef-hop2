
const baseurl = process.env.REACT_APP_SERVICE_URL;

export async function get(endpoint) {
  const token = window.localStorage.getItem('token');

  const url = `${baseurl}${endpoint}`;

  const options = {
    headers: {},
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  /* todo framkvæma get */
  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}

export async function post(endpoint, data) {
  const url = `${baseurl}${endpoint}`;
  //console.log(data);
  //console.log(url);


  const token = window.localStorage.getItem('token');
  //console.log(token)

  const options = {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
    //console.log(token)
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}
