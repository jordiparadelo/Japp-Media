import { motion } from 'framer-motion';
import styles from '@/styles/ReviewButton.module.scss';

interface ReviewButtonProps {
  googleReviewUrl: string;
}

export default function ReviewButton({ googleReviewUrl }: ReviewButtonProps) {
  return (
    <motion.a
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.reviewButton}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      Leave a Google Review
    </motion.a>
  );
}