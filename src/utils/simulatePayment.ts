export const simulatePayment = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}