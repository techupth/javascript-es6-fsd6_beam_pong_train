let height = undefined;
let result = function (height) {
  return height ?? `Height is not defined`;
  /*
  if (height === undefined) {
    return `Height is not defined`;
  } else {
    return `Hell Yeah!!`;
  }
  */
};
console.log(result()); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
