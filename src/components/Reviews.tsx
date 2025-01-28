import { Suspense } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import reviewsData from "../data/ReviewsData";

const Reviews: React.FC = () => {
    return (
        <section className="reviews">
            <Suspense fallback={<Loading />}>
                {reviewsData.map((data, i) => <ReviewCard data={data} key={i} />)}
            </Suspense>
        </section>
    )
}

export default Reviews;