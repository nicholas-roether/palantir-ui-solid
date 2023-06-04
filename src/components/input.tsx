import { ComponentProps, JSX, mergeProps, splitProps } from "solid-js";

interface TextInputProps extends ComponentProps<"input"> {
	inputClass?: string;
	inputClassList?: Record<string, boolean | undefined>;
}

function TextInput(props: TextInputProps): JSX.Element {
	const propsWithDefaults = mergeProps({ type: "text" }, props);

	const [local, others] = splitProps(propsWithDefaults, [
		"inputClass",
		"inputClassList",
		"class",
		"classList"
	]);

	return (
		<span
			class={local.class}
			classList={{ "pui-input": true, ...local.classList }}
		>
			<input
				class={local.inputClass}
				classList={local.inputClassList}
				{...others}
			/>
		</span>
	);
}

export { TextInput, TextInputProps };
