export const toggleName = 'PDPA:accepted'

export const isAccepted = () => localStorage.getItem(toggleName) === 'true'

export const saveConsent = (accepted = true) => {
  localStorage.setItem(toggleName, accepted)
}
