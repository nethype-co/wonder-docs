#!/usr/bin/env node

/**
 * Generates llms-full.txt from all documentation markdown files.
 * Concatenates all docs into a single markdown file for LLM ingestion.
 *
 * Usage: node scripts/generate-llms-full.mjs
 * Output: static/llms-full.txt
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const DOCS_DIR = new URL("../docs", import.meta.url).pathname;
const OUTPUT_FILE = new URL("../static/llms-full.txt", import.meta.url).pathname;

// Category ordering for consistent output
const CATEGORY_ORDER = [
  "getting-started",
  "theme-settings",
  "product-page",
  "sections",
  "guides",
  "faq-troubleshooting",
  "developer",
  "changelog",
];

async function getAllMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => join(e.parentPath ?? e.path, e.name))
    .sort((a, b) => {
      // Sort by category order, then alphabetically within category
      const relA = relative(DOCS_DIR, a);
      const relB = relative(DOCS_DIR, b);
      const catA = relA.split("/")[0];
      const catB = relB.split("/")[0];
      const orderA = CATEGORY_ORDER.indexOf(catA);
      const orderB = CATEGORY_ORDER.indexOf(catB);
      if (orderA !== orderB) return (orderA === -1 ? 999 : orderA) - (orderB === -1 ? 999 : orderB);
      return relA.localeCompare(relB);
    });
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { title: null, body: content };

  const frontmatter = match[1];
  const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1] : null;
  const body = content.slice(match[0].length).trim();

  return { title, body };
}

function getCategoryLabel(relPath) {
  const parts = relPath.split("/");
  const labels = {
    "getting-started": "Getting Started",
    "theme-settings": "Theme Settings",
    "product-page": "Product Page",
    sections: "Sections",
    guides: "Guides",
    "faq-troubleshooting": "FAQ & Troubleshooting",
    developer: "Developer",
    changelog: "Changelog",
  };
  return labels[parts[0]] || parts[0];
}

async function main() {
  const files = await getAllMarkdownFiles(DOCS_DIR);
  const sections = [];
  let currentCategory = null;

  for (const filePath of files) {
    const relPath = relative(DOCS_DIR, filePath);
    const content = await readFile(filePath, "utf-8");
    const { title, body } = extractFrontmatter(content);

    if (!body.trim()) continue; // Skip empty files

    const category = getCategoryLabel(relPath);

    // Add category separator
    if (category !== currentCategory) {
      currentCategory = category;
      sections.push(`\n${"=".repeat(60)}\n# ${category}\n${"=".repeat(60)}\n`);
    }

    // Add article
    const heading = title || relPath;
    sections.push(`## ${heading}\n\n${body}\n`);
  }

  const output = `# Wonder Theme — Complete Documentation

> This file contains the complete documentation for the Wonder Theme, a premium Shopify theme by Nethype. It covers installation, theme settings, all sections, product page blocks, developer APIs, and troubleshooting. Current version: v2.2.1.

> Source: https://support.wonder-theme.com
> Last generated: ${new Date().toISOString().split("T")[0]}

${sections.join("\n---\n\n")}
`;

  await writeFile(OUTPUT_FILE, output, "utf-8");

  const sizeKB = Math.round(Buffer.byteLength(output, "utf-8") / 1024);
  console.log(`Generated ${OUTPUT_FILE} (${sizeKB} KB, ${files.length} articles)`);
}

main().catch((err) => {
  console.error("Error generating llms-full.txt:", err);
  process.exit(1);
});
