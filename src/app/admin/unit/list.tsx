import { CloneButton, Datagrid, DeleteButton, EditButton, List, NumberField, ReferenceField, TextField } from "react-admin";

export const UnitList = () => {
	return (
		<List>
			<Datagrid rowClick="edit">
				<NumberField source="id" label="ID" sortable={false} />
				<TextField source="title" label="Title" sortable={false} />
				<TextField source="description" label="Description" sortable={false} />
				<ReferenceField source="courseId" reference="courses" />
				<NumberField source="order" label="Order" sortable={false} />
				<EditButton label="Edit" />
				<CloneButton label="Clone" />
				<DeleteButton label="Delete" />
			</Datagrid>
		</List>
	)
}