import { ComponentProps, JSX, splitProps } from "solid-js";
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

function Button(props: ButtonProps): JSX.Element {
	const [local, others] = splitProps(props, ["href", "large", "smoldering", "classList"]);

	const component = (): string => local.href ? "a" : "button";
	return (
		<Dynamic
			component={component()}
			href={local.href}
			classList={{
				"pui-button": true,
				"pui-large": local.large,
				"pui-smoldering": local.smoldering,
				...local.classList,
			}}
			{...others}
		/>
	);
}

export { Button, ButtonProps };
