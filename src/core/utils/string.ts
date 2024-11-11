export const getInitials = (fullName: string) => {
  return fullName
    .split(' ')
    .filter((name) => name.trim() !== '')
    .map((name) => name.charAt(0))
    .join('');
};
