const files = import.meta.glob("/src/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function slugFromPath(path) {
  const filename = path.split("/").pop().replace(/\.md$/, "");
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

// Posts use simple `key: value` frontmatter (see src/posts/*.md for the
// format) — no nested data or multiline values, so a full YAML parser
// isn't needed here.
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1");
    data[key] = value;
  }

  return { data, content: match[2].trim() };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}
