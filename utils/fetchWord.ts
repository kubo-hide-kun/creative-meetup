export const fetchWord = async (username: string) => {
  const { word } = await fetch(
    "https://o66nqaepga.execute-api.ap-northeast-1.amazonaws.com/dev/getWord",
    {
      method: "POST",
      body: JSON.stringify({ username }),
    }
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return word;
};
