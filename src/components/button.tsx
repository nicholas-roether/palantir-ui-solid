import { ComponentProps, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

interface BaseButtonProps {
	large?: boolean;
	smoldering?: boolean;
}

interface ActionButtonProps extends BaseButtonProps, ComponentProps<"button"> {
	href?: undefined
}

interface LinkButtonProps extends BaseButtonProps, ComponentProps<"a"> {
	href: string;
}

type ButtonProps = ActionButtonProps | LinkButtonProps;

function Button({
	large = false,
	smoldering = false,
	href,
	classList,
	...props
}: ButtonProps): JSX.Element {
	const component = href ? "a" : "button";
	return (
		<Dynamic
			component={component}
			href={href}
			classList={{
				"pui-button": true,
				"pui-large": large,
				"pui-smoldering": smoldering,
				...classList,
			}}
			{...props}
		/>
	);
}

export { Button, ButtonProps };
