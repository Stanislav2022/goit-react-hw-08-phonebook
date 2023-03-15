import { Alert, AlertIcon } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"

// export const AlertStatusError = () => {

//   return (
//   <Alert status='error'>
//     <AlertIcon />
//     There was an error processing your request
//   </Alert>
//   )
// }

const AlertStatusError = () => {
  const toast = useToast()
  return (
    <>
      {toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })}
    </>
  )
}
export default AlertStatusError