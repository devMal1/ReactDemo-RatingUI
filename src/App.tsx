import { Rating } from "./components/rating-component.tsx"

export const App = () => {
  return (
    <div>
      <Rating heading="How do you like React?" />
      <Rating starColor="blue" />
    </div>
  )
}
