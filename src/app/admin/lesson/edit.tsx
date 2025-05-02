import { SimpleForm, Edit, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const LessonEdit = () => {
	return (
		<Edit>
			<SimpleForm>
				<NumberInput
					source="id"
					label="ID"
					validate={[required()]}
				/>
				<TextInput
					source="title"
					label="Title"
					validate={[required()]}
				/>
				<ReferenceInput
					source="unitId"
					reference="units"
					label="Unit"
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