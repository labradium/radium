import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import axios from "axios";
import * as fs from "fs-extra";
import path from "node:path";

const MyOctokit = Octokit.plugin(paginateRest, restEndpointMethods);
const octokit = new MyOctokit();

async function downloadFile(url: string, filePath: string) {
	const response = await axios.get(url, { responseType: "arraybuffer" });
	await fs.outputFile(filePath, response.data);
}

async function downloadDirectory(owner: string, repo: string, dirPath: string, localDir: string) {
	const { data } = await octokit.rest.repos.getContent({
		owner,
		repo,
		path: dirPath,
	});

	if (Array.isArray(data)) {
		await fs.ensureDir(localDir);

		for (const item of data) {
			const itemPath = path.join(localDir, item.name);
			if (item.type === "file" && item.download_url) {
				await downloadFile(item.download_url, itemPath);
			} else if (item.type === "dir") {
				await downloadDirectory(owner, repo, item.path, itemPath);
			}
		}
	}
}

export async function getTemplate(dirPath: string, template: string) {
	const owner = "silver-radium";
	const repo = "cli";
	const localDir = path.resolve(process.cwd(), dirPath);

	await downloadDirectory(owner, repo, template, localDir);
}
