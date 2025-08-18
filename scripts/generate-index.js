const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(__dirname, "../blog/posts");
const indexFile = path.join(postsDir, "index.json");

function generateExcerpt(content, length = 120) {
  return content
    .replace(/[#>*_`]/g, "") // hapus markdown symbols
    .substring(0, length) + "...";
}

const posts = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      thumbnail: data.thumbnail || "/assets/favicon/og-image.png",
      slug: file.replace(".md", ""),
      excerpt: generateExcerpt(content),
      tags: data.tags || []
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // urut terbaru dulu

fs.writeFileSync(indexFile, JSON.stringify(posts, null, 2));
console.log("✅ Blog index.json generated!");
