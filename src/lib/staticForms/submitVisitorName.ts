import { visitorNameFormConfig } from "@/data/staticFormConfig";

const VISITOR_SOURCE = "21% Loaded";
const NO_REFLECTION = "None";

type VisitorActivity = {
  action: "Name submitted" | "Opened reflection";
  reflectionOpened: string;
  visitorName: string;
};

async function submitVisitorActivity({
  action,
  reflectionOpened,
  visitorName
}: VisitorActivity) {
  const normalizedName = visitorName.trim();
  const normalizedReflection = reflectionOpened.trim();

  if (
    !visitorNameFormConfig.enabled ||
    !normalizedName ||
    !normalizedReflection
  ) {
    return false;
  }

  if (
    !visitorNameFormConfig.actionUrl ||
    !visitorNameFormConfig.nameEntryId ||
    !visitorNameFormConfig.reflectionEntryId ||
    !visitorNameFormConfig.actionEntryId
  ) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Visitor name collection is enabled, but its Google Form configuration is incomplete."
      );
    }

    return false;
  }

  const formData = new FormData();
  formData.append(visitorNameFormConfig.nameEntryId, normalizedName);
  formData.append(
    visitorNameFormConfig.reflectionEntryId,
    normalizedReflection
  );
  formData.append(visitorNameFormConfig.actionEntryId, action);

  if (visitorNameFormConfig.sourceEntryId) {
    formData.append(visitorNameFormConfig.sourceEntryId, VISITOR_SOURCE);
  }

  try {
    await fetch(visitorNameFormConfig.actionUrl, {
      body: formData,
      method: "POST",
      mode: "no-cors"
    });

    return true;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Visitor name collection could not be completed.", error);
    }

    return false;
  }
}

export function submitVisitorName(visitorName: string) {
  return submitVisitorActivity({
    action: "Name submitted",
    reflectionOpened: NO_REFLECTION,
    visitorName
  });
}

export function submitOpenedReflection(
  visitorName: string,
  reflectionOpened: string
) {
  return submitVisitorActivity({
    action: "Opened reflection",
    reflectionOpened,
    visitorName
  });
}
