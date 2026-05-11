'use client';

type Props = {
	selectedSize: string | null;
	onSelect: (size: string) => void;
	sizes?: string[];
	className?: string;
};

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL'];

const SizeSelector = ({
	selectedSize,
	onSelect,
	sizes = defaultSizes,
	className,
}: Props) => {
	return (
		<div className='flex gap-2'>
			{sizes.map((size) => (
				<button
					key={size}
					type='button'
					onClick={() => onSelect(size)}
					className={`p-2 border text-sm uppercase transition ${selectedSize === size ? 'bg-white text-bg border-white' : 'border-white/20 text-white hover:border-white'} ${className}`}>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizeSelector;
