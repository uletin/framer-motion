import useSWR from "swr";
import ArticleHooks from "./use-case/article";
import baseUrl from "./use-case/base-url";
import { Box } from "@mui/system";
import Logo from "./component/utils/logo";

function MyComponent() {
  const { fetch } = ArticleHooks();
  const url = baseUrl();

  const { data, error, isLoading } = useSWR(`${url}/api/articles`, fetch);

  const columns = [
    { field: "id", headerName: "No", width: 80 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "content", headerName: "Content", width: 800 },
  ];

  const rows = data?.map((row) => ({
    id: row.id,
    title: row.attributes.title,
    content: row.attributes.content,
  }));

  return (
    <div>
      {isLoading && "Loading..."}
      {data && (
        <>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Logo />
          </Box>
        </>
      )}
      {error && error.message}
    </div>
  );
}

export default MyComponent;
