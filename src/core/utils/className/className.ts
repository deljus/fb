export default (...args: (string | undefined | null)[]): string => {
  return args.filter(arg => arg).join(" ");
};
