import { createClient, groq } from "next-sanity";

const projectId = "a0leql2n";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
