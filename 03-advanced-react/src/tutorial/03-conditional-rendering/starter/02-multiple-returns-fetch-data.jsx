import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  const { avatar_url, name, company, bio } = user;

  if (isLoading) {
    return <h1>Content Loading</h1>;
  }

  if (isError) {
    return <h1>Error occured</h1>;
  }

  return (
    <div
      style={{
        width: "900px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Fetch Data</h2>
      <img
        style={{ display: "block", width: "200px", borderRadius: "20%" }}
        src={avatar_url}
        alt="avatar"
      />
      <h1>{name}</h1>
      <h2>Works At {company}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
