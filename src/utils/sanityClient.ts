import { createClient } from "next-sanity";
const client = createClient({
  projectId: "gspu7iun",
  dataset: "production",
  useCdn: false,
});

export { client };
