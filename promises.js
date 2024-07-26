// promiss that will returne Must
// it can b resove nd reject
// pending
// fulfill...resolve/rejected
// promis function makesure they return sonme
// that use when response on another function
// they ucse callback
// then method are use.chatch
// in ths work one method
// in catch err value wll also use call back function
// we can do optional chaiing usin ternery operator?
//optional chaining in promis
let num = 3;
const evenOdd = new Promise(() => {
  if (num % 0) {
    console.log("even fun");
  } else {
    console.log("Odd fun");
  }
});

evenOdd
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((final) => {
    console.log(final);
  });

/////
