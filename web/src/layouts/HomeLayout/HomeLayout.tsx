import { navigate, routes } from '@redwoodjs/router'
import CoinSVG from 'src/components/svg/CoinSVG/CoinSVG'
import Button from 'src/components/Button'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="max-w-[1200px] min-h-screen m-auto px-2 lg:px-8">
      <header className="h-24 w-full py-4 flex justify-between">
        <button
          className="h-16 my-auto flex"
          onClick={() => {
            navigate(routes.home())
          }}
        >
          <div className="h-16 w-16 my-auto">
            <CoinSVG width={40} height={40}></CoinSVG>
          </div>
          <span className="my-auto ml-6 text-4xl font-display">
            Class Kudos
          </span>
        </button>
        <div className="bg-blue-200 my-auto">
          <Button
            onClick={() => {
              navigate(routes.login())
            }}
          />
        </div>
      </header>
      {children}
    </div>
  )
}

export default HomeLayout

// <div className="h-full">
//           <CoinSVG height={40} width={40}></CoinSVG>
//         </div>
//         <div className="bg-green-300">
//           {/* <Button
//             onClick={() => {
//               window.alert('yay!')
//             }}
//           /> */}
//         </div>
