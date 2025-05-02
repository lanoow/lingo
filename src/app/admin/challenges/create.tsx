import { SimpleForm, Create, TextInput, required, NumberInput, ReferenceInput, SelectInput } from "react-admin";

export const ChallengeCreate = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput
					source="question"
					label="Question"
					validate={[required()]}
				/>
				<SelectInput
					source="type"
					choices={[
						{
							id: "SELECT",
							name: "Select",
						},
						{
							id: "ASSIST",
							name: "Assist",
						},
					]}
					label="Type"
					validate={[required()]}
				/>
				<ReferenceInput
					source="lessonId"
					reference="lessons"
					label="Lesson"
					isRequired
				/>
				<NumberInput
					source="order"
					label="Order"
					validate={[required()]}
				/>
			</SimpleForm>
		</Create>
	)
}