export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  const url = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  const res = await fetch(url, {
    ...options,
    cache: options?.cache || "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;

    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log("Failed to parse error response", e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}
export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;

  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`.replace(/([^:]\/)\/+/g, "$1");
}