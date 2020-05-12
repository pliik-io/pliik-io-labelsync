import { labelsync, repo } from "label-sync";

/* Repository */
import { prisma } from "./repos/prisma";
import { github } from "./repos/github";

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    // github,
    /* Personalized repositories */
    "pliik.dev": repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
    "pliik-next": repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [],
    }),
  },
});
