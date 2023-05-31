import { JSX, createSignal } from "solid-js";
import { Heading, Paragraph, Button, TextInput, Surface, Card } from "../src";

function CardToggle(): JSX.Element {
	const [state, setState] = createSignal(false);

	return <Card onClick={() => setState(state => !state)}>{state().toString()}</Card>
}

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
			<Surface>Div Surface</Surface>
			<Card>This is a card</Card>
			<CardToggle />
		</>
	);
}

export default Preview;
