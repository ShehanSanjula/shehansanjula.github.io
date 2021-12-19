const disableDevtools = callback => {
  const original = Object.getPrototypeOf;

  Object.getPrototypeOf = (...args) => {
    if (Error().stack.includes("getCompletions")) callback();
    return original(...args);
  };
};

disableDevtools(() => {
  console.error("devtools has been disabled");

  while (1);
});
