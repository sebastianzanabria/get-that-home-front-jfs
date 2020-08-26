const URL_LOCAL = "http://localhost:3000";

export async function getAllProperties() {
  const result = await fetch(`${URL_LOCAL}/properties`);
  const data = await result.json();
  return data;
}
export async function getLastestProperties() {
  const result = await fetch(`${URL_LOCAL}/lastest`);
  const data = await result.json();
  return data;
}
export async function getFilteredProperties(query) {
  const result = await fetch(`${URL_LOCAL}/properties${query}`);
  const data = await result.json();
  return data;
}
export async function getAllPropertiesByType(type) {
  const result = await fetch(
    `${URL_LOCAL}/properties?type_of_property=${type}`
  );
  const data = await result.json();
  return data;
}
