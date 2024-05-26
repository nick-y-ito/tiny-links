import { redirect } from "next/navigation";

export default function Page() {
	redirect("/urls");
}

// if user is logged in:

// - redirect to /urls

// if user is not logged in:

// - redirect to /login
