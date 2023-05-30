import { ComponentProps, JSX, splitProps } from "solid-js";

type SurfaceProps = ComponentProps<"div">;

function Surface(props: SurfaceProps): JSX.Element {
	const [local, others] = splitProps(props, ["classList"]);

	return (
		<div
			classList={{ "pui-surface": true, ...local.classList }}
			{...others}
		/>
	);
}

type CardProps = ComponentProps<"div">;

function Card(props: CardProps): JSX.Element {
	const [local, others] = splitProps(props, ["classList"]);

	return <div classList={{ "pui-card": true, ...local.classList }} {...others} />;
}

export { Surface, SurfaceProps, Card, CardProps };
