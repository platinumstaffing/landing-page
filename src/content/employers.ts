/**
 * Verified employer partners for the "Trusted by Employers" band.
 * Keep empty until the client supplies a permissioned partner list.
 * The homepage section self-hides when this array is empty.
 *
 * Shape: { id: string; name: string; logoSrc?: string; href?: string }
 */
export type EmployerPartner = {
  id: string;
  name: string;
  logoSrc?: string;
  href?: string;
};

export const employers: EmployerPartner[] = [];
