import { Alert, AlertIcon } from "@chakra-ui/react"

export const AlertStatusError = () => {

  return (
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  )
}