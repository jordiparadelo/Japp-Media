import { ROICalculatorForm } from '@/components/ui';
import styles from '@/styles/ROIPage.module.scss';

import React from 'react';

export default function ROICalculatorPage() {
  return (
    <section className={styles.container + " bkg-grid-pattern"}>
      <h1 className={styles.title}>ROI Calculator</h1>
      <ROICalculatorForm />
    </section>
  );
}