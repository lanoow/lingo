"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenges/list";
import { ChallengeCreate } from "./challenges/create";
import { ChallengeEdit } from "./challenges/edit";

import { ChallengeOptionList } from "./challengeOptions/list";
import { ChallengeOptionCreate } from "./challengeOptions/create";
import { ChallengeOptionEdit } from "./challengeOptions/edit";

const dataProvider = simpleRestProvider("/api");

export default function App() {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource
				name="courses"
				recordRepresentation="title"
				list={CourseList}
				create={CourseCreate}
				edit={CourseEdit}
			/>

			<Resource
				name="units"
				recordRepresentation="title"
				list={UnitList}
				create={UnitCreate}
				edit={UnitEdit}
			/>

			<Resource
				name="lessons"
				recordRepresentation="title"
				list={LessonList}
				create={LessonCreate}
				edit={LessonEdit}
			/>

			<Resource
				name="challenges"
				recordRepresentation="question"
				list={ChallengeList}
				create={ChallengeCreate}
				edit={ChallengeEdit}
			/>

			<Resource
				name="challengeOptions"
				recordRepresentation="text"
				list={ChallengeOptionList}
				create={ChallengeOptionCreate}
				edit={ChallengeOptionEdit}
			/>
		</Admin>
	)
}