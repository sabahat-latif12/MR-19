//const
const a = 1;
console.log("a before sope", a);
{
  console.log("in the sope", a);
  const a = 1;
}

console.log("in outer sope", a);
