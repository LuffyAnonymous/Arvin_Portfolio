import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep AGENTS.md exactly as authored — this repo's AGENTS.md defines the
  // project's own build/QA/test workflow and shouldn't be auto-appended to.
  agentRules: false,
};

export default nextConfig;
