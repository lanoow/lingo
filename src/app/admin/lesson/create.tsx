import { SimpleForm, Create, TextInput, required, NumberInput, ReferenceInput } from "react-admin";

export const LessonCreate = () => {
	return (
		<Create>
			<SimpleForm>
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
		</Create>
	)
}