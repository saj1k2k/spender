export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // @ts-ignore
  return date.toLocaleDateString("us-US", options);
};
