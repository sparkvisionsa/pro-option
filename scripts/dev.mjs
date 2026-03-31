import { rm } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";

const port = process.env.PORT || "9002";
const host = "127.0.0.1";
const devUrl = `http://${host}:${port}/`;
const nextBin = path.join(
  process.cwd(),
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next"
);

async function cleanNextCache() {
  try {
    await rm(path.join(process.cwd(), ".next"), { recursive: true, force: true });
    console.log("[dev] Cleared .next cache.");
  } catch (error) {
    console.warn("[dev] Failed to clear .next cache:", error);
  }
}

function ping(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      url,
      {
        headers: {
          "cache-control": "no-cache",
        },
      },
      (res) => {
        res.resume();
        resolve(res.statusCode ?? 0);
      }
    );

    req.on("error", reject);
    req.setTimeout(1500, () => {
      req.destroy(new Error("timeout"));
    });
  });
}

async function waitForServer(url) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await ping(url);
      return true;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return false;
}

async function prewarm(url) {
  const ready = await waitForServer(url);
  if (!ready) {
    console.warn(`[dev] Skipped prewarm because ${url} was not reachable in time.`);
    return;
  }

  try {
    const status = await ping(url);
    console.log(`[dev] Prewarmed ${url} (status ${status}).`);
  } catch (error) {
    console.warn("[dev] Prewarm request failed:", error);
  }
}

await cleanNextCache();

const child = spawn(nextBin, ["dev", "-p", port], {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32",
});

const shutdown = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

prewarm(devUrl);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
