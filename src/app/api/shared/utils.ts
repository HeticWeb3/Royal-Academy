/**
 * Crée la date de création d'un utilisateur
 * @param days
 */
export const getFutureDate = (days: number) => {
    const today: Date = new Date()
    return new Date(new Date().setDate(today.getDate() + days)).toUTCString()
}