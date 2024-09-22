'use client';

import React, { useState, ChangeEvent } from "react";
import styles from "@/styles/ROIPage.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const ROICalculatorForm = () => {
	const [formData, setFormData] = useState({
		avgClientValue: "",
		missedCalls: "",
		closeRate: "",
	});
	const [result, setResult] = useState<{
		monthlyCost: number;
		ourCharge: number;
		roi: number;
	} | null>(null);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const calculateROI = (e: React.FormEvent) => {
		e.preventDefault();
		const monthlyCost =
			Number(formData.avgClientValue) *
			Number(formData.missedCalls) *
			4 *
			(Number(formData.closeRate) / 100);
		const ourCharge = 150;
		const roi = ((monthlyCost - ourCharge) / ourCharge) * 100;

		setResult({ monthlyCost, ourCharge, roi });
	};

	return (
		<>
			<form
				onSubmit={calculateROI}
				className={styles.form}
			>
				<div className={styles.formGroup}>
					<label
						htmlFor='avgClientValue'
						className={styles.label}
					>
						Average Client Value ($)
					</label>
					<input
						type='number'
						id='avgClientValue'
						name='avgClientValue'
						value={formData.avgClientValue}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label
						htmlFor='missedCalls'
						className={styles.label}
					>
						Missed Calls per Week
					</label>
					<input
						type='number'
						id='missedCalls'
						name='missedCalls'
						value={formData.missedCalls}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label
						htmlFor='closeRate'
						className={styles.label}
					>
						Average Close Rate (%)
					</label>
					<input
						type='number'
						id='closeRate'
						name='closeRate'
						value={formData.closeRate}
						onChange={handleInputChange}
						className={styles.input}
						required
					/>
				</div>
				<button
					type='submit'
					className={styles.button}
				>
					Calculate ROI
				</button>
			</form>
			<AnimatePresence>
				{result && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
						className={styles.resultBox}
					>
						<div className={styles.resultBox}>
							<h2 className={styles.resultTitle}>Results</h2>
							<p className={styles.resultItem}>
								Monthly Cost: ${result.monthlyCost.toFixed(2)}
							</p>
							<p className={styles.resultItem}>Our Charge: ${result.ourCharge}</p>
							<p className={styles.resultItem}>ROI: {result.roi.toFixed(2)}%</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};  // Add this closing curly brace

export default ROICalculatorForm;
