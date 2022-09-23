import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promisesFormRef = document.querySelector('.form');

promisesFormRef.addEventListener('submit', onPromisesFormSubmit);

function onPromisesFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = Number(value);
  });
  // console.log(formDataObj);
  createPromisesArray(formDataObj);
}

function createPromisesArray({ delay, step, amount }) {
  const delaysArray = Array.from(
    { length: amount },
    (_, i) => delay + i * step
  );
  // console.log(delaysArray);
  const promises = delaysArray.map(createPromise);
  // console.log(promises);
}

function createPromise(delay, position) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`Fulfilled promice ${position + 1} in ${delay} ms`);
      } else {
        // Reject
        reject(`Rejected promice ${position + 1} in ${delay} ms`);
      }
    }, delay);
  })
    .then(value =>
      Notify.success(value, {
        timeout: 5000,
      })
    )
    .catch(error =>
      Notify.failure(error, {
        timeout: 5000,
      })
    );
}
