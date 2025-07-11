import * as playwright from "playwright";
import ms from "ms";
import assert from "node:assert";

const args = process.argv.slice(2);
const arg = args.find((s) => s.startsWith("--addr="));
const addr = arg ? arg.split("=")[1] : "localhost:5173";

const test = async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  context.setDefaultTimeout(ms("5s"));
  await page.goto(`http://${addr}`);

  const title = await page.title();
  assert.strictEqual(title, "Harris is Harry Potter");

  await page.waitForSelector(".-bootstrapped");

  const proof = await page.waitForSelector(".Proof");
  assert.ok(proof, "Proof element should be present");

  await browser.close();
};

test().catch((error) => {
  console.error("Test failed:", error);
  process.exit(1);
});
