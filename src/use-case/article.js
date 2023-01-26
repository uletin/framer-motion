import axios from "axios";
import baseUrl from "./base-url";

export default function ArticleHooks() {
  const fetch = async (url) =>
    await axios.get(url).then((response) => response.data.data);
  return { fetch };
}
