//Outputted per Gemini Experimental thinking (basically Gemini with Deepseek) with Comments as the original ver from the tutorial (https://www.youtube.com/watch?v=gT1v33oA1gI&list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z&index=1&pp=iAQB) made it so that anytime i ran `npm run server`, it would sometimes push SOME but not all of the posts to the postlist and when re-running that command, it would sometimes get all the posts. (when ran over the course of 10 times, the results varied. Here, with this output and the async promise, it seems to be fixed.)

//Asked Gemini to help me figure out how to make it so that It can iterate through folders in dirPath so that its neater when I write the blogposts.. If this works, I can put the images inside a folder WITHIN the blogpost's folder instead of having the page in content and linking to the images in folders in the img folder.

const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");

let postlist = [];

const getPosts = async () => {
    try {
        const items = await fs.promises.readdir(dirPath, { withFileTypes: true }); // Get file and directory info
        const folderPromises = items
            .filter(item => item.isDirectory()) // Filter only directories (folders)
            .map(async (folder, i) => {
                const folderPath = path.join(dirPath, folder.name);
                const files = await fs.promises.readdir(folderPath);

                // Assuming each folder contains a single markdown file named "index.md" or similar.
                const markdownFile = files.find(file => file.endsWith(".md"));
                if (!markdownFile) {
                    console.warn(`No markdown file found in folder: ${folder.name}`);
                    return null; // Skip this folder if no markdown file is found.
                }

                const filePath = path.join(folderPath, markdownFile);
                const contents = await fs.promises.readFile(filePath, "utf8");

                let obj = {};
                let post;

                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i);
                    }
                    return acc;
                };
                const parseMetadata = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1];
                        });
                        return obj;
                    }
                };
                const parseContent = ({ lines, metadataIndices }) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length);
                    }
                    return lines.join("\n");
                };
                const lines = contents.split("\n");
                const metadataIndices = lines.reduce(getMetadataIndices, []);
                const metadata = parseMetadata({ lines, metadataIndices });
                const content = parseContent({ lines, metadataIndices });
                post = {
                    id: i,
                    title: metadata.title ? metadata.title : "Untitled Post",
                    author: metadata.author ? metadata.author : "N/A",
                    date_created: metadata.date_created ? metadata.date_created : "N/A",
                    tag: metadata.tag ? metadata.tag : "No Tags",
                    blurb: metadata.blurb ? metadata.blurb : "No Blurb Available",
                    content: content ? content : "No Content",
                    folderName: folder.name, // Add the folder name to the post object
                };
                console.log(post);
                return post;
            });

        postlist = (await Promise.all(folderPromises)).filter(post => post !== null); // Filter out null values (skipped folders)
        const data = JSON.stringify(postlist);
        await fs.promises.writeFile("src/posts/posts.json", data);
        console.log("posts.json written successfully");

    } catch (err) {
        console.error("Error in getPosts:", err);
    }
};

getPosts();