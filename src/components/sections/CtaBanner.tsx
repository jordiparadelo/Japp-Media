import { BookButton, SectionTag } from "@/components/ui";
import React from "react";
import styles from "@/styles/CtaBanner.module.scss";
import DoodleArrow from "@/assets/icons/doodle-arrow.svg";

function CtaBanner() {
	return (
		<section className={'jap-section ' + styles["section"]}>
			<div className='container mx-auto'>
				<div className={styles["section_layout"]}>
					<div className={styles["section_heading"]}>
						<SectionTag
							rotation={3}
							color='var(--color-primary)'
						>
							<span className='font-semibold'>Comencemos Ya!</span>
						</SectionTag>
						<h2 className='sr-only'>Agenda una llamada gratuita</h2>

						<div className={styles["section_heading_title-wrap"]}>
							<div className={styles["section_heading_line"]}>
								<div className='rotate-[-5deg] text-white'>Agenda</div>
							</div>
							<div className={styles["section_heading_line"]}>
								<SectionTag
									rotation={-3}
									color='var(--color-primary)'
								>
									<span>llamada</span>
								</SectionTag>
							</div>
							<div className={styles["section_heading_line"]}>
								<SectionTag
									rotation={3}
									color='var(--color-secondary)'
								>
									<span>gratuita</span>
								</SectionTag>
								<DoodleArrow />
							</div>
						</div>
					</div>
					<p className='text-md text-center'>
						Al final de esta llamada de auditoría, tendrá una comprensión clara
						de los próximos pasos que puede tomar para que su negocio comience a
						generar clientes potenciales consistentes y predecibles en línea.
					</p>

					<div className={styles["section_actions"]}>
						<BookButton variant="accent" text="Agenda una llamada" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaBanner;
