import { ComponentProps, JSX, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

type SurfaceProps<T extends ValidComponent = "div"> = ComponentProps<T> & {
	component?: T;
};

function Surface<T extends ValidComponent>({
	component = "div",
	classList,
	...props
}: SurfaceProps<T>): JSX.Element {
	return (
		<Dynamic
			component={component}
			classList={{ "pui-surface": true, ...classList }}
			{...props}
		/>
	);
}

interface CardProps extends ComponentProps<"div"> {}

function Card({ classList, ...props }: CardProps): JSX.Element {
	return <div classList={{ "pui-card": true, ...classList }} {...props} />;
}

export { Surface, SurfaceProps, Card, CardProps };
