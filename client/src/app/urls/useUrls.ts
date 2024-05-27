import { urlService } from "@/services/url.service";
import { IUrl } from "@/types/url";
import { useEffect, useState } from "react";

export const useUrls = () => {
	const [urls, setUrls] = useState<IUrl[]>([]);

	useEffect(() => {
		async function fetchUrls() {
			const urls = await urlService.fetchUrls();
			setUrls(urls);
		}
		fetchUrls();
	}, []);

	const deleteUrl = async (url: IUrl) => {
		setUrls((urls) => urls.filter((u) => u.hash !== url.hash));
	};

	return { urls, setUrls, deleteUrl };
};
