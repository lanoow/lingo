
type Props = {
	children: React.ReactNode;
}

export const FeedWrapper = ({
	children
}: Props) => {
	return (
		<div className="relative top-0 flex flex-col flex-1 pb-10 space-y-4">
			{children}
		</div>
	)
}