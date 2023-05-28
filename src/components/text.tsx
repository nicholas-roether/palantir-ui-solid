import { ComponentProps, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

type HeadingSize = "1" | "2" | "3" | "4" | "5" | "6";

interface HeadingProps extends ComponentProps<"h1"> {
	size: HeadingSize;
}

function Heading({ size, classList, ...props }: HeadingProps): JSX.Element {
	return (
		<Dynamic
			component={`h${size}`}
			classList={{
				...classList,
				"pui-heading": true,
			}}
			{...props}
		/>
	);
}

type ParagraphProps = ComponentProps<"p">;

function Paragraph({ classList, ...props }: ParagraphProps): JSX.Element {
	return <p classList={{ ...classList, "pui-paragraph": true }} {...props} />;
}

type SpanProps = ComponentProps<"span">;

function Span({ classList, ...props }: SpanProps): JSX.Element {
	return <span classList={{ ...classList, "pui-span": true }} {...props} />;
}

export { Heading, HeadingProps, Paragraph, ParagraphProps, Span, SpanProps };
