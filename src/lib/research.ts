export type ResearchEvent =
  | "decision_timestamp"
  | "choice_reversal"
  | "intervention_trigger"
  | "ui_interaction";

export const logEvent = (
  event: ResearchEvent,
  payload: Record<string, string | number | boolean | null> = {}
) => {
  const timestamp = new Date().toISOString();
  // Console logs are intentional for research instrumentation.
  console.log("[research]", { event, timestamp, ...payload });
};
