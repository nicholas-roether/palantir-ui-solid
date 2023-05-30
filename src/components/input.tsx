import { ComponentProps, JSX, splitProps } from "solid-js";

interface TextInputProps extends Omit<ComponentProps<"input">, "type"> {
	inputClass?: string;
	inputClassList?: Record<string, boolean | undefined>;
}

function TextInput(props: TextInputProps): JSX.Element {
	const [local, others] = splitProps(props, [
		"inputClass",
		"inputClassList",
		"class",
		"classList"
	]);

	return (
		<span class={local.class} classList={{ "pui-input": true, ...local.classList }}>
			<input
				type="text"
				class={local.inputClass}
				classList={local.inputClassList}
				{...others}
			/>
		</span>
	);
}

export { TextInput, TextInputProps };
