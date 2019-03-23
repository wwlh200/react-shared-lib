// tslint:disable-next-line:no-any
const throttle = (fn: any, delay: number) => {
  let lastCall = 0;
  // tslint:disable-next-line:no-any
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...args);
  };
};

// tslint:disable-next-line:no-any
const debounce = (fn: any, delay: number) => {
  let timer: NodeJS.Timer | undefined;
  // tslint:disable-next-line:no-any
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    },                 delay);
  };
};

export { throttle, debounce };
