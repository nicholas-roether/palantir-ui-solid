import { ComponentProps, JSX } from "solid-js";

interface TextInputProps extends Omit<ComponentProps<"input">, "type"> {
	inputClass?: string;
	inputClassList?: Record<string, boolean | undefined>;
}

function TextInput({
	class: spanClass,
	inputClass,
	inputClassList,
	classList,
	...props
}: TextInputProps): JSX.Element {
	return (
		<span
			class={spanClass}
			classList={{ "pui-input": true, ...classList }}
		>
			<input type="text" class={inputClass} classList={inputClassList} {...props} />
		</span>
	);
}

export { TextInput, TextInputProps };
