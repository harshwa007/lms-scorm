/**
 * Unified API Client for communicating with the Spring Boot Backend.
 * Since Next.js proxy rewrites `/api/*` to `http://localhost:8081/api/*`,
 * we can fetch relative `/api/...` endpoints directly without CORS issues.
 */

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = new Headers(options.headers);

  // Set default JSON Content-Type header if body is provided and not FormData
  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  // Retrieve JWT bearer token from client document cookies if available
  if (typeof window !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = errorText;
    try {
      const parsed = JSON.parse(errorText);
      errorMessage = parsed.message || parsed.error || errorText;
    } catch {
      // Use raw error text if not JSON
    }
    throw new Error(errorMessage || `Request failed with status ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json() as Promise<T>;
  }

  return (await response.text()) as unknown as T;
}

export function setAuthToken(token: string) {
  if (typeof window !== 'undefined') {
    document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Strict`;
  }
}

export function removeAuthToken() {
  if (typeof window !== 'undefined') {
    document.cookie = 'token=; path=/; max-age=0; SameSite=Strict';
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
    return token || null;
  }
  return null;
}
