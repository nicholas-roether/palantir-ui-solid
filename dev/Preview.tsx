import { JSX } from "solid-js";
import { Heading, Paragraph } from "../src";
import { Button } from "../src";

function Preview(): JSX.Element {
	return (
		<>
			<Heading size="1">Hello There!</Heading>
			<Paragraph>Lorem ipsum dolor sit amet</Paragraph>
			<Button large smoldering>
				Press me!
			</Button>
		</>
	);
}

export default Preview;
