export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      console.error("Missing NEXT_PUBLIC_API_URL");
      return null;
    }

    const url = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

    const res = await fetch(url, {
      ...options,
      cache: options?.cache || "no-store",
    });

    if (!res.ok) return null;

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) return null;

    return await res.json();
  } catch (err) {
    console.error("fetchAPI error:", err);
    return null;
  }
}
export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;

  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`.replace(/([^:]\/)\/+/g, "$1");
}