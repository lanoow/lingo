"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HeartIcon, Volume2Icon } from "lucide-react"

export type DictionaryItem = {
	id: number;
	word: string;
	translation: string;
	soundSrc?: string; // Optional, if you want to include sound functionality
}

export const DictionaryTable = ({ dictionary }: { dictionary: DictionaryItem[]; }) => {
	const [favorites, setFavorites] = useState<number[]>([]);

	useEffect(() => {
		const stored = localStorage.getItem("favorites");
		if (stored) {
			setFavorites(JSON.parse(stored));
		}
	}, []);

	const toggleFavorite = (id: number) => {
		setFavorites((prev) => {
			let updated: number[];
			if (prev.includes(id)) {
				updated = prev.filter(favId => favId !== id);
			} else {
				updated = [...prev, id];
			}
			localStorage.setItem("favorites", JSON.stringify(updated));
			return updated;
		});
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="sr-only">ID</TableHead>
					<TableHead>Word</TableHead>
					<TableHead>Translation</TableHead>
					<TableHead className="sr-only">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{dictionary.map((item) => (
					<TableRow key={item.id}>
						<TableCell>
							{item.id}
						</TableCell>
						<TableCell>
							{item.word}
						</TableCell>
						<TableCell>
							{item.translation}
						</TableCell>
						<TableCell className="flex justify-end space-x-2">
							{item.soundSrc && (
								<Button onClick={() => {
									const audio = new Audio(item.soundSrc);
									audio.play();
								}}>
									<Volume2Icon />
								</Button>
							)}
							<Button onClick={() => toggleFavorite(item.id)} aria-label={favorites.includes(item.id) ? "Remove from favorites" : "Add to favorites"}>
								<HeartIcon fill={favorites.includes(item.id) ? "currentColor" : "none"} />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}