import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import styles from '@/styles/Slider.module.scss';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onThresholdReached?: (value: number) => void;
  threshold?: number;
}

export function Slider({
  min,
  max,
  step,
  defaultValue,
  onChange,
  onThresholdReached,
  threshold,
}: SliderProps) {
  const handleValueChange = (values: number[]) => {
    const newValue = values[0];
    onChange && onChange(newValue);

    if (threshold && onThresholdReached && newValue >= threshold) {
      onThresholdReached && onThresholdReached(newValue);
    }
  };

  return (
    <SliderPrimitive.Root
      className={styles.sliderRoot}
      min={min}
      max={max}
      step={step}
      defaultValue={[defaultValue || 0]}
      onValueChange={handleValueChange}
    >
      <SliderPrimitive.Track className={styles.sliderTrack}>
        <SliderPrimitive.Range className={styles.sliderRange} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles.sliderThumb} aria-label="Slider value" />
    </SliderPrimitive.Root>
  );
}

export default Slider;