import { Section } from '@/components/ui';
import { ABOUT } from '@/data/content';
import React from 'react'
import styles from '@/styles/AboutBenefits.module.scss';
import Image from 'next/image';
export default function Benefits() {
    const { benefits } = ABOUT;
  return (
    <Section className={styles.section} inViewAnimation={false}>
        <div className={styles.layout}>
            <div className={styles.grid}>
                {benefits.items.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </Section>
  )
}
