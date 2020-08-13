const URL_LOCAL = "http://localhost:3000/properties";

export async function getAllProperties() {
  const result = await fetch(URL_LOCAL);
  const data = await result.json();
  return data;
}
