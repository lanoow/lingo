import { SimpleForm, Edit, TextInput, required, ReferenceInput, NumberInput, SelectInput } from "react-admin";

export const ChallengeEdit = () => {
	return (
		<Edit>
			<SimpleForm>
				<NumberInput
					source="id"
					label="ID"
					validate={[required()]}
				/>
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
		</Edit>
	)
}