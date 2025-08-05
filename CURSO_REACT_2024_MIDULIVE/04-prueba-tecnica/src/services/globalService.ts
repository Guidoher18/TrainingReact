export async function fetchJSON<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}
