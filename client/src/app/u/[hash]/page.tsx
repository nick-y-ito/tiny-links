import { urlService } from "@/services/url.service";
import { redirect } from "next/navigation";

interface IPageProps {
	params: {
		hash: string;
	};
}

export default async function Page({ params }: IPageProps) {
	const { hash } = params;
	const fetchedUrl = await urlService.fetchUrl(hash);

	if (!fetchedUrl) {
		redirect("/urls");
	}

	redirect(fetchedUrl.origUrl);
}
