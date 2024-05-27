import { UrlClient } from "@/types/url";
import { ChangeEvent, use, useEffect, useState } from "react";
import { urlService } from "@/services/url.service";

interface IUseNewUrlPageProps {
	hash: UrlClient["hash"];
}

export const useNewUrlPage = ({ hash }: IUseNewUrlPageProps) => {
	const [url, setUrl] = useState<UrlClient>();
	const [newOrigUrl, setNewOrigUrl] = useState("");

	useEffect(() => {
		async function fetchUrl() {
			const fetchedUrl = await urlService.fetchUrl(hash);
			setUrl(fetchedUrl);
			setNewOrigUrl(fetchedUrl.origUrl);
		}
		fetchUrl();
	}, [hash]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewOrigUrl(e.target.value);
	};

	const handleUpdate = async () => {
		try {
			const updatedUrl = await urlService.updateUrl(hash, newOrigUrl);
			setUrl(updatedUrl);
			alert(`URL updated successfully!`);
		} catch (error) {
			alert(`Failed to update URL. Please try again.`);
		}
	};

	return { url, newOrigUrl, handleInputChange, handleUpdate };
};
