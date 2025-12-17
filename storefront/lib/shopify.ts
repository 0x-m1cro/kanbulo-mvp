const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
const SHOPIFY_API_VERSION =
  process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-10";

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_STOREFRONT_TOKEN) {
    throw new Error("Shopify Storefront API credentials are missing.");
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Shopify request failed: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  if (!json.data) {
    throw new Error("Shopify response missing data.");
  }

  return json.data;
}

export async function fetchBlogArticles(blogHandle: string, first = 20) {
  const data = await shopifyFetch<{
    blog: {
      articles: {
        edges: {
          node: {
            handle: string;
            title: string;
            excerpt: string;
            contentHtml: string;
            publishedAt: string;
            tags: string[];
            image?: { altText: string | null; url: string } | null;
            authorV2?: { name: string } | null;
          };
        }[];
      };
    } | null;
  }>(
    `
      query BlogArticles($handle: String!, $first: Int!) {
        blog(handle: $handle) {
          articles(first: $first, sortKey: PUBLISHED_AT, reverse: true) {
            edges {
              node {
                handle
                title
                excerpt
                contentHtml
                publishedAt
                tags
                image {
                  altText
                  url
                }
                authorV2 {
                  name
                }
              }
            }
          }
        }
      }
    `,
    { handle: blogHandle, first },
  );

  return data.blog?.articles.edges.map((edge) => edge.node) ?? [];
}
