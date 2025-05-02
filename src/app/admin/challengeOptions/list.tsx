import { BooleanField, CloneButton, Datagrid, DeleteButton, EditButton, List, NumberField, ReferenceField, TextField } from "react-admin";

export const ChallengeOptionList = () => {
	return (
		<List>
			<Datagrid rowClick="edit">
				<NumberField source="id" label="ID" sortable={false} />
				<TextField source="text" label="Text" sortable={false} />
				<BooleanField source="correct" sortable={false} />
				<ReferenceField source="challengeId" reference="challenges" />
				<TextField source="imageSrc" label="Image" sortable={false} />
				<TextField source="audioSrc" label="Audio" sortable={false} />
				<EditButton label="Edit" />
				<CloneButton label="Clone" />
				<DeleteButton label="Delete" />
			</Datagrid>
		</List>
	)
}