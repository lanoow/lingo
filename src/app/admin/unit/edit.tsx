import { SimpleForm, Edit, TextInput, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitEdit = () => {
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
				<TextInput
					source="description"
					label="Description"
					validate={[required()]}
				/>
				<ReferenceInput
					source="courseId"
					reference="courses"
					label="Course"
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