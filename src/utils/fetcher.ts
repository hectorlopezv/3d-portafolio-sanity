const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("An error occurred while fetching the data.");
  }
  const data: any = await res.json();
  return data;
};
export { fetcher };
