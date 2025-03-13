import { Suspense } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import reviews from "../data/Reviews";

const Reviews: React.FC = () => {
    return (
        <section className="reviews">
            <div className="section-title">
                <h1>Our Reviews</h1>
            </div>
            <div className="reviews-container">
                <Suspense fallback={<Loading />}>
                    {reviews.map((data, i) => <ReviewCard data={data} key={i} />)}
                </Suspense>
            </div>
        </section>
    )
}

export default Reviews;