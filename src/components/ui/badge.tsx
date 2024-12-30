type BadgeProps = {
    label: string | React.ReactNode;
}

export default function Badge({ label }: BadgeProps) {
	return (
		<div className='w-fit h-fit text-sm font-medium rounded-full px-4 py-2 border-black border leading-none text-nowrap bg-gradient-to-b from-gray-950 to-gray-600 text-light '>
			{label}
		</div>
	);
}