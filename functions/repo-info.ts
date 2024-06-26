export function repoInfo(url: string) {
	let repoUrl = "";
	let subDir: string;

	if (url.endsWith(".git")) {
		repoUrl = url.replace(".git", "");
		subDir = ".";
	} else {
		if (url.includes("/tree") && url.includes("/main")) {
			repoUrl = url.replace("/tree/main", "");
		} else {
			repoUrl = url;
		}
	}

	const owner = repoUrl.split("/")[3];
	const repo = repoUrl.split("/")[4];
	subDir = repoUrl.split("/").slice(5).join("/");

	return { owner, repo, subDir };
}
