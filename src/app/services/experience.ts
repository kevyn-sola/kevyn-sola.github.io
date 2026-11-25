/** Début de l'expérience en développement : arrivée chez Kalisport (6 mars 2023). */
export const EXPERIENCE_START = new Date(2023, 2, 6); // les mois commencent à 0 : 2 = mars

/**
 * Nombre d'années complètes écoulées depuis `start`.
 * L'année n'est comptée qu'une fois la date anniversaire passée
 * (ex. le 5 mars 2026 → 2 ans, le 6 mars 2026 → 3 ans).
 */
export function fullYearsSince(start: Date, now: Date = new Date()): number {
  let years = now.getFullYear() - start.getFullYear();
  const anniversaryNotReached =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (anniversaryNotReached) years--;
  return Math.max(0, years);
}

/** Libellé prêt à afficher : « 1 an », « 3 ans »… */
export function experienceLabel(now: Date = new Date()): string {
  const years = fullYearsSince(EXPERIENCE_START, now);
  return `${years} ${years > 1 ? 'ans' : 'an'}`;
}
