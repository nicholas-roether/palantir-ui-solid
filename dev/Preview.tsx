import { JSX } from "solid-js";
import { Heading, Paragraph, Button, TextInput } from "../src";

function Preview(): JSX.Element {
	return (
		<>
			<Heading size="1">Hello There!</Heading>
			<Paragraph>Lorem ipsum dolor sit amet</Paragraph>
			<Button large smoldering>
				Press me!
			</Button>
			<br />
			<Button href="#">
				Link button
			</Button>
			<br />
			<TextInput placeholder="1234" />
		</>
	);
}

export default Preview;
