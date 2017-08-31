module.exports = {
  NODE_ENV : '"production"',
  build : (() => {
    const date = new Date();
    const formattedDate = date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
      date.getHours() + ":" + date.getMinutes();
    return '"' + formattedDate + '"';
  })()
};
