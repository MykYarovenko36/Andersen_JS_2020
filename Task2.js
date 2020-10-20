const apiRequests = ['https://todos/1', 'https://todos/2', 'https://todos/3'];
const getRequest = (url) => { 
  return new Promise((resolve) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1; 
    setTimeout(() => resolve(url), delayTime); 
  }); 
};  
const fetchAll = (requests) => {
  const resultList = requests.map((request) => {
      return getRequest(request);
  });
  resultList.forEach((result) => {
    result.then((result) => {
     const showRequestData = ("data :", result); 
     return showRequestData;
    })
  })
};
