import { visitorNameFormConfig } from "@/data/staticFormConfig";

const VISITOR_SOURCE = "21% Loaded";

export async function submitVisitorName(visitorName: string) {
  const normalizedName = visitorName.trim();

  if (!visitorNameFormConfig.enabled || !normalizedName) {
    return false;
  }

  if (
    !visitorNameFormConfig.actionUrl ||
    !visitorNameFormConfig.nameEntryId
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
