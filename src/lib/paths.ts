export function requestTalentHref(options?: {
  service?: string;
  industry?: string;
}): string {
  const params = new URLSearchParams();
  if (options?.service) {
    params.set("service", options.service);
  }
  if (options?.industry) {
    params.set("industry", options.industry);
  }
  const query = params.toString();
  return query
    ? `/employers/request-talent?${query}`
    : "/employers/request-talent";
}
