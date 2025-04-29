export type CategoryType =
  | "cakes"
  | "cookies"
  | "cupcakes"
  | "muffins"
  | "brownies"
  | "rockyRoad"
  | "cheesecakes"
  | "giantCookies";

export const categoryOptions: Record<CategoryType, string[]> = {
  cakes: ["Birthday Cake", "Themed Cake", "Wedding Cake", "Custom Design"],
  cookies: ["Chocolate Chip", "White Chocolate Chip Cookies", "Double Chocolate Chip Cookies", "Orange Chocolate Cookies", "Raisin Cookies", "Oatmeal Cookies"],
  cupcakes: ["Vanilla Cupcakes", "Chocolate Cupcakes", "Red Velvet Cupcakes", "Themed Cupcakes"],
  muffins: ["Chocolate Chip Muffins", "White Chocolate Chip Muffins", "Dark Chocolate Chip Muffins", "Blueberry Muffins"],
  brownies: ["Classic Brownies", "White Chocolate Chip Brownies", "Fudge Brownies"],
  rockyRoad: ["Classic Rocky Road", "Peanut Butter Rocky Road"],
  cheesecakes: ["Classic Cheesecake", "Strawberry Cheesecake", "Oreo Cheesecake", "Biscoff Cheesecake"],
  giantCookies: ["Birthday Giant Cookie"],
};