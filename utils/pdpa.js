export const toggleName = 'PDPA:accepted'

export const isSaved = () => ['true', 'false'].includes(localStorage.getItem(toggleName))

export const isAccepted = () => localStorage.getItem(toggleName) === 'true'

export const saveConsent = (accepted = true) => {
  localStorage.setItem(toggleName, accepted)
}
