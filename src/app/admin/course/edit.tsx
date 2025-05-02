import { SimpleForm, Edit, TextInput, required, NumberInput } from "react-admin";

export const CourseEdit = () => {
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
					source="imageSrc"
					label="Image"
					validate={[required()]}
				/>
			</SimpleForm>
		</Edit>
	)
}