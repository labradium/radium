export function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			type="button"
			className="dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-full flex flex-row my-4"
		>
			{children}
		</button>
	);
}
