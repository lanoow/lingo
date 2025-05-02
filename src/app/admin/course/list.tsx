import { CloneButton, Datagrid, DeleteButton, EditButton, List, NumberField, TextField } from "react-admin";

export const CourseList = () => {
	return (
		<List>
			<Datagrid rowClick="edit">
				<NumberField source="id" label="ID" sortable={false} />
				<TextField source="title" label="Title" sortable={false} />
				<TextField source="imageSrc" label="Image" sortable={false} />
				<EditButton label="Edit" />
				<CloneButton label="Clone" />
				<DeleteButton label="Delete" />
			</Datagrid>
		</List>
	)
}