import React from 'react'
import { Section, UseCasesGrid } from '@/components/ui'
import styles from '@/styles/UseCases.module.scss'
import { ABOUT } from '@/data/content'

export default function UseCases() {
    const {useCases} = ABOUT
  return (
    <Section className={styles.section} inViewAnimation={false}>
        <div className={styles.layout}>
            <div className={styles.heading}>
                <p className={styles.subtitle}>Casos de usos</p>
                <h2 className={styles.title}>{useCases.title}</h2>
            </div>
            <UseCasesGrid useCases={useCases.cases} className={styles.grid}/>
        </div>
    </Section>
  )
}
