const Helper = ({ num }) => {
  const memorize = {};
  function helper(n) {
    if (n in memorize) return memorize[n];
    if (n < 3) return 1;
    return (memorize[n] = helper(n - 1) + helper(n - 2));
  }
  console.log(helper(n - 1));
  return helper(n - 1);
};

export default Helper;
