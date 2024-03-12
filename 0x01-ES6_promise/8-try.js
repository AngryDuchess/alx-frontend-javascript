export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}

// export default function divideFunction(numerator, denominator) {
//     return new Promise((resolve, reject) => {
//         if (denominator === 0) {
//         reject(new Error("cannot divide by 0"));
//         } else {
//         resolve(numerator / denominator);
//         }
//     });
// }
