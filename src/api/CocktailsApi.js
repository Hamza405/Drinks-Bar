import { endpoint } from "../utils/constants";

export async function getCocktailsRequest() {
  const res = await fetch(`${endpoint}search.php?s`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}

export async function getIngredientsRequest() {
  const res = await fetch(`${endpoint}list.php?i=list`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}

export async function getGlassesRequest() {
  const res = await fetch(`${endpoint}list.php?g=list`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}

export async function getCategoriesRequest() {
  const res = await fetch(`${endpoint}list.php?c=list`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}

export async function getAlcoholicTypesRequest() {
  const res = await fetch(`${endpoint}list.php?a=list`);

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data.drinks;
}
