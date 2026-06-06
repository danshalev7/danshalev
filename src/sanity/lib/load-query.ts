import type { QueryParams } from "sanity";
import { sanityClient, isConfigured } from "./client";

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  if (!isConfigured || !sanityClient) {
    return { data: null };
  }

  const result = await sanityClient.fetch<QueryResponse>(query, params ?? {});

  return {
    data: result,
  };
}
