import styles from './ReviewCard.module.css' 

type ReviewCardProps = {
    data: {
        url?: string;
        height: string;
        width: string;
    };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
    return (
        <div className={styles.review_card}>
            <iframe 
                src={data.url} 
                height={data.height}
                width={data.width} 
                style={{ border: "none", overflow: "hidden" }}  
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default ReviewCard;