import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Button } from "@/ui/primitives/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
	return (
		<main className={"relative flex h-screen flex-col items-center justify-center"}>
			<h1 className={"text-4xl font-semibold"}>Radium Next.js Template</h1>
			<a href={"https://github.com/vgseven/radium"} className={"mb-6"} target={"_blank"} rel="noreferrer">
				<Button className={"mt-6 rounded-full"}>
					<GitHubLogoIcon className={"mx-2"} /> Star on GitHub
				</Button>
			</a>
			<ThemeToggle />
		</main>
	);
}
