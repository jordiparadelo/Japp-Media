'use client'

import { Reviews } from '@/types'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ReviewPopUp.module.scss'

type ReviewPopUpProps = {
    review: Reviews
    className?: string
}

export default function ReviewPopUp({ review, className }: ReviewPopUpProps) {

  return (
    <div className={`${styles.reviewPopUp} ${className}`}>
        <div className={styles.image}>
            <Image src={review.image} alt={review.name} width={40} height={40} />
        </div>
        <div className={styles.content}>
            <h3 className={styles.name}>{review.name}</h3>
            <p className={styles.description}>{review.description}</p>
        </div>
    </div>
  )
}
