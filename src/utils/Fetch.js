const domain = 'https://www.toilet.king-james.top';
// const domain = 'http://192.168.0.114:8080';


const Fetch = new Object();

Fetch.Type = {
  JSON: 'application/json; charset=utf-8',
  FORM: 'application/x-www-form-urlencoded; charset=utf-8',
  FORMDATA: 'multipart/form-data; charset=utf-8',
};

Fetch.POST = (url, options = {}) => request(domain + url, 'POST', options);
Fetch.GET = (url, options = {}) => request(domain + url, 'GET', options);


function request(url, method = 'POST', options = {}) {
  const { body, params, headers = { 'Content-Type': Fetch.Type.JSON } } = options;

  return new Promise((resolve, reject) => {
    fetch(url, { headers, method, params, body: JSON.stringify(body) }).then(response => response.json()).then((res) => {
      if (res.errcode === 0) {
        resolve(res.data);
        return;
      }
      alert(res.errmsg);
      reject(res.errmsg);
    }).catch((error) => {
      alert('系统错误！');
      reject();
    });
  });
}

export default Fetch;