import { useState, useEffect } from "react";
import useUser from "../userContext/useUser";
import axios from "axios";

export default function useData(url) {
  const [posts, setPosts] = useState([]);
  const { token } = useUser();

  useEffect(() => {
    axios
      .get("url", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        setPosts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [url]);

  return [posts];
}
