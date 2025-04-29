import { useForm, SubmitHandler } from "react-hook-form";
import styles from './QuoteForm.module.css'
import { sendEmail } from "@/api/EmailService";
import { categoryOptions, CategoryType } from "@/data/CategoryOptions";

interface FormData {
  name: string;
  email: string;
  category: CategoryType;
  cakeType: string;
  dietaryRequirements: string;
  specialRequests?: string;
}

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const selectedCategory = watch("category");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Form submitted!");
    sendEmail(data);
    reset();
  };

  const selectionLabel = 
    ["cupcakes", "cookies", "muffins", "brownies", "rockyRoad"].includes(selectedCategory)
        ? "Flavour" : "Cake Type";

  return (
    <section className={styles.quote_section}>
        <div className={styles.section_title}>
            <h1>Get A Quote</h1>
        </div>
        <form className={styles.quote_form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name<sup>*</sup></label>
        <input id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <label htmlFor="email">Email<sup>*</sup></label>
        <input
            id="email"
            {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            <label htmlFor="category">Category<sup>*</sup></label>
            <select id="category" {...register("category", { required: "Please select a category" })}>
                <option value="">Select a category</option>
                {Object.keys(categoryOptions).map((key) => (
                <option key={key} value={key}>
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </option>
                ))}
            </select>
            {errors.category && <p className={styles.error}>{errors.category.message}</p>}

            {selectedCategory && (
                <>
                <label htmlFor="cakeType"> {selectionLabel}<sup>*</sup></label>
                <select id="cakeType" {...register("cakeType", { required: "Please select an option" })}>
                    <option value="">Select an option</option>
                    {categoryOptions[selectedCategory].map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                {errors.cakeType && <p className={styles.error}>{errors.cakeType.message}</p>}
                </>
            )}

            <label htmlFor="dietaryRequirements">Dietary Requirements:</label>
            <textarea
              id="dietaryRequirements"
              {...register("dietaryRequirements")}
              placeholder="Include any dietary requirements, allergies etc."
              draggable={false}
            />

            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea 
              id="specialRequests"
                {...register("specialRequests")} 
                placeholder="Describe your design, flavors, quantity etc." 
                draggable={false}
            />

            <button type="submit">Submit</button>
            <div className={styles.warning}>
              <p>*As a local business based in <b>Nottingham</b>, we offer pickup and local dropoff services that <b>may be available upon arrangement</b>. Check with us in your quote to see if this service can be arranged for your order.</p>
            </div>
        </form>
    </section>
  );
};

export default QuoteForm;
