import { InlineWidget } from "react-calendly";

const CalendlyWidget: React.FC<{ url: string }> = ({ url }) => (
  <InlineWidget url={url} styles={{ height: '630px' }} />
);

export default CalendlyWidget;