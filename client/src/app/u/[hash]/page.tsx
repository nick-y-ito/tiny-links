import { urlService } from "@/services/url.service";
import { redirect } from "next/navigation";

export const fetchCache = 'force-no-store';

interface IPageProps {
	params: {
		hash: string;
	};
}

export default async function Page({ params }: IPageProps) {
	const { hash } = params;
	const fetchedUrl = await urlService.fetchUrl(hash);

	console.log({fetchedUrl});

	if (!fetchedUrl) {
		redirect("/urls");
	}

	redirect(fetchedUrl.origUrl);
}
