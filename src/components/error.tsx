import { ComponentProps, JSX, splitProps } from "solid-js"

type ErrorProps = ComponentProps<"div">;

function Error(props: ErrorProps): JSX.Element {
	const [local, others] = splitProps(props, ["classList"]);
	return <div classList={{ "pui-error": true, ...local.classList}} {...others} />
}

export { Error, ErrorProps };
