function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const x = true;
    if (x) {
      resolve('true');
    }
    reject(new Error('false'));
  });
  return promise;
}
export default getResponseFromAPI;