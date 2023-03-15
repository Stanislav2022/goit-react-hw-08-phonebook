function ToastStatusError() {
  const toast = () => useToast({title: `error toast`,status: error,isClosable: true,})


  return (
    <Wrap>
    {toast}
    </Wrap>
  )
}