import { SimpleForm, Create, TextInput, required, NumberInput, ReferenceInput } from "react-admin";

export const UnitCreate = () => {
	return (
		<Create>
			<SimpleForm>
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
		</Create>
	)
}