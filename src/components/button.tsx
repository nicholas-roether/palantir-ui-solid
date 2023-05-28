import { ComponentProps, JSX } from "solid-js";

interface ButtonProps extends ComponentProps<"button"> {
	large?: boolean;
	smoldering?: boolean;
}

function Button({
	large = false,
	smoldering = false,
	classList,
	...props
}: ButtonProps): JSX.Element {
	return (
		<button
			classList={{
				...classList,
				"pui-button": true,
				"pui-large": large,
				"pui-smoldering": smoldering,
			}}
			{...props}
		/>
	);
}

export { Button, ButtonProps };
