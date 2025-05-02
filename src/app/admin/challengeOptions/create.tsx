import { SimpleForm, Create, TextInput, required, ReferenceInput, BooleanInput } from "react-admin";

export const ChallengeOptionCreate = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput
					source="text"
					label="Text"
					validate={[required()]}
				/>
				<BooleanInput
					source="correct"
					label="Correct"
					validate={[required()]}
				/>
				<ReferenceInput
					source="challengeId"
					reference="challenges"
					label="Challenge"
					isRequired
				/>
				<TextInput
					source="imageSrc"
					label="Image Source"
				/>
				<TextInput
					source="audioSrc"
					label="Audio Source"
				/>
			</SimpleForm>
		</Create>
	)
}