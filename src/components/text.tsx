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
				"pui-heading": true,
				...classList,	
			}}
			{...props}
		/>
	);
}

type ParagraphProps = ComponentProps<"p">;

function Paragraph({ classList, ...props }: ParagraphProps): JSX.Element {
	return <p classList={{ "pui-paragraph": true, ...classList }} {...props} />;
}

type SpanProps = ComponentProps<"span">;

function Span({ classList, ...props }: SpanProps): JSX.Element {
	return <span classList={{ "pui-span": true, ...classList }} {...props} />;
}

export { Heading, HeadingProps, Paragraph, ParagraphProps, Span, SpanProps };
