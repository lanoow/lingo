import { SimpleForm, Edit, TextInput, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
	return (
		<Edit>
			<SimpleForm>
				<NumberInput
					source="id"
					label="ID"
					validate={[required()]}
				/>
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
		</Edit>
	)
}