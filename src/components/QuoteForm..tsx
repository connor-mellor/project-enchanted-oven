import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  category: CategoryType;
  cakeType: string;
  message?: string;
}

type CategoryType =
  | "cakes"
  | "cookies"
  | "cupcakes"
  | "brownies"
  | "rockyRoad"
  | "cheesecakes"
  | "giantCookies";

const categoryOptions: Record<CategoryType, string[]> = {
  cakes: ["Birthday Cake", "Themed Cake", "Wedding Cake", "Custom Design"],
  cookies: ["Chocolate Chip", "White Chocolate Chip Cookies",  "Double Chocolate Chip Cookies", "Orange Chocolate Cookies", "Raisin Cookies", "Oatmeal Cookies"],
  cupcakes: ["Vanilla Cupcakes", "Chocolate Cupcakes", "Red Velvet Cupcakes", "Themed Cupcakes"],
  brownies: ["Classic Brownies", "White Chocolate Chip Brownies", "Fudge Brownies"],
  rockyRoad: ["Classic Rocky Road", "Peanut Butter Rocky Road"],
  cheesecakes: ["Classic Cheesecake", "Strawberry Cheesecake", "Oreo Cheesecake", "Biscoff Cheesecake"],
  giantCookies: ["Birthday Giant Cookie"],
};

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const selectedCategory = watch("category");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Order Data:", data);
    alert("Form submitted!");
  };

  const selectionLabel = 
    selectedCategory === "cupcakes" || selectedCategory === "cookies"
        ? "Flavor"
        : selectedCategory === "brownies" || selectedCategory === "rockyRoad"
        ? "Brownie/Rocky Road Type"
        : selectedCategory === "giantCookies"
        ? "Giant Cookie Type"
        : "Cake Type";

  return (
    <section className="quote-section">
        <div className="section-title">
            <h1>Get A Quote</h1>
        </div>
        <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input {...register("name", { required: "Name is required" })} />
            {errors.name && <p>{errors.name.message}</p>}

            <label>Email:</label>
            <input
                {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label>Category:</label>
            <select {...register("category", { required: "Please select a category" })}>
                <option value="">Select a category</option>
                {Object.keys(categoryOptions).map((key) => (
                <option key={key} value={key}>
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} {/* Format text */}
                </option>
                ))}
            </select>
            {errors.category && <p>{errors.category.message}</p>}

            {selectedCategory && (
                <>
                <label> {selectionLabel} </label>
                <select {...register("cakeType", { required: "Please select an option" })}>
                    <option value="">Select an option</option>
                    {categoryOptions[selectedCategory].map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                {errors.cakeType && <p>{errors.cakeType.message}</p>}
                </>
            )}

            <label>Special Requests:</label>
            <textarea 
                {...register("message")} 
                placeholder="Describe your design, flavors, quantity etc." 
                draggable={false}
            />

            <button type="submit">Submit Order</button>
        </form>
    </section>
  );
};

export default QuoteForm;
