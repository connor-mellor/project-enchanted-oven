import { Suspense } from "react";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import Loading from "@/components/Loading/Loading";
import reviews from "@/data/Reviews";
import styles from './Reviews.module.css'

const Reviews: React.FC = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.section_title}>
                <h1>Our Reviews</h1>
            </div>
            <div className={styles.reviews_container}>
                <Suspense fallback={<Loading />}>
                    {reviews.map((data, i) => <ReviewCard data={data} key={i} />)}
                </Suspense>
            </div>
        </section>
    )
}

export default Reviews;