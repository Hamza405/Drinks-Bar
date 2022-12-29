import { endpoint } from "../utils/constans";

export async function getCocktailsRequest() {
  const res = await fetch(`${endpoint}search.php?s`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}
