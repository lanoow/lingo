import { CloneButton, Datagrid, DeleteButton, EditButton, List, NumberField, ReferenceField, SelectField, TextField } from "react-admin";

export const ChallengeList = () => {
	return (
		<List>
			<Datagrid rowClick="edit">
				<NumberField source="id" label="ID" sortable={false} />
				<TextField source="question" label="Question" sortable={false} />
				<SelectField source="type" choices={[
					{
						id: "SELECT",
						name: "Select",
					},
					{
						id: "ASSIST",
						name: "Assist",
					},
				]} sortable={false} />
				<ReferenceField source="lessonId" reference="lessons" />
				<NumberField source="order" label="Order" sortable={false} />
				<EditButton label="Edit" />
				<CloneButton label="Clone" />
				<DeleteButton label="Delete" />
			</Datagrid>
		</List>
	)
}