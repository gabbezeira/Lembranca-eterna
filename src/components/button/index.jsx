import { Container } from './styles'

export const Button = ({
	children,
	onClick,
	variant,
	fontSize,
	borderRadius,
	fontWeight,
	height,
	width,
	showButton,
	type = 'button',
	disabled,
	...props
}) => (
	<Container
		$showButton={showButton}
		$variant={variant}
		$fontSize={fontSize}
		$fontWeight={fontWeight}
		$height={height}
		$width={width}
		$borderRadius={borderRadius}
		type={type}
		onClick={onClick}
		disabled={disabled}
		{...props}
	>
		{children}
	</Container>
)
