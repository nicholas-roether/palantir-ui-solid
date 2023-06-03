import { ComponentProps, JSX, splitProps } from "solid-js";

type IconButtonProps = ComponentProps<"button">;

function IconButton(props: IconButtonProps): JSX.Element {
	const [local, other] = splitProps(props, ["classList"]);

	return (
		<button
			classList={{ "pui-icon-button": true, ...local.classList }}
			{...other}
		/>
	);
}

export { IconButton, IconButtonProps };
