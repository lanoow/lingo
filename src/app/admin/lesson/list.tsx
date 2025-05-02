import { CloneButton, Datagrid, DeleteButton, EditButton, List, NumberField, ReferenceField, TextField } from "react-admin";

export const LessonList = () => {
	return (
		<List>
			<Datagrid rowClick="edit">
				<NumberField source="id" label="ID" sortable={false} />
				<TextField source="title" label="Title" sortable={false} />
				<ReferenceField source="unitId" reference="units" />
				<NumberField source="order" label="Order" sortable={false} />
				<EditButton label="Edit" />
				<CloneButton label="Clone" />
				<DeleteButton label="Delete" />
			</Datagrid>
		</List>
	)
}