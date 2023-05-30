import { ComponentProps, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

type HeadingSize = "1" | "2" | "3" | "4" | "5" | "6";

interface HeadingProps extends ComponentProps<"h1"> {
	size: HeadingSize;
}

function Heading(props: HeadingProps): JSX.Element {
	const [local, others] = splitProps(props, ["size", "classList"]);

	return (
		<Dynamic
			component={`h${local.size}`}
			classList={{
				"pui-heading": true,
				...local.classList
			}}
			{...others}
		/>
	);
}

type ParagraphProps = ComponentProps<"p">;

function Paragraph(props: ParagraphProps): JSX.Element {
	const [local, others] = splitProps(props, ["classList"]);

	return (
		<p
			classList={{ "pui-paragraph": true, ...local.classList }}
			{...others}
		/>
	);
}

type SpanProps = ComponentProps<"span">;

function Span(props: SpanProps): JSX.Element {
	const [local, others] = splitProps(props, ["classList"]);

	return (
		<span
			classList={{ "pui-span": true, ...local.classList }}
			{...others}
		/>
	);
}

export { Heading, HeadingProps, Paragraph, ParagraphProps, Span, SpanProps };
