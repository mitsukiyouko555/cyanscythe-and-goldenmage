//Outputted per Gemini Experimental thinking (basically Gemini with Deepseek) with Comments as the original ver from the tutorial (https://www.youtube.com/watch?v=gT1v33oA1gI&list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z&index=1&pp=iAQB) made it so that anytime i ran `npm run server`, it would sometimes push SOME but not all of the posts to the postlist and when re-running that command, it would sometimes get all the posts. (when ran over the course of 10 times, the results varied. Here, with this output and the async promise, it seems to be fixed.)

//Asked Gemini to help me figure out how to make it so that It can iterate through folders in dirPath so that its neater when I write the blogposts.. If this works, I can put the images inside a folder WITHIN the blogpost's folder instead of having the page in content and linking to the images in folders in the img folder.
const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");

let postlist = [];

const getPosts = async () => { // Make getPosts an async function
    try {
        const files = await fs.promises.readdir(dirPath); // Use fs.promises.readdir for Promise-based readdir
        const postPromises = files.map(async (file, i) => { // Use map to create an array of Promises
            let obj = {};
            let post;
            const contents = await fs.promises.readFile(`${dirPath}/${file}`, "utf8"); // Use fs.promises.readFile for Promise-based readFile

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
            };
            console.log(post); // Log each post as it's processed
            return post; // Return the post from the Promise
        });

        postlist = await Promise.all(postPromises); // Wait for all file reads and processing to complete
        const data = JSON.stringify(postlist);
        await fs.promises.writeFile("src/posts/posts.json", data); // Use fs.promises.writeFile for Promise-based writeFile
        console.log("posts.json written successfully");

    } catch (err) {
        console.error("Error in getPosts:", err);
    }
};

getPosts();