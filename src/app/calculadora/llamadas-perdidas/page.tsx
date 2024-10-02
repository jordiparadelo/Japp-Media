import { ROICalculatorForm } from '@/components/ui';
import styles from '@/styles/ROIPage.module.scss';
import { getSEOConfig } from '@/data/seo';

export const dynamic = 'force-dynamic'

export const metadata = getSEOConfig('missing-calls');

import React from 'react';

export default function ROICalculatorPage() {
  return (
    <section className={styles.container + " bkg-grid-pattern"}>
      <h1 className={styles.title}>ROI Calculator</h1>
      <ROICalculatorForm />
    </section>
  );
}