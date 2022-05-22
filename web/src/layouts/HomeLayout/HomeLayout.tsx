type HomeLayoutProps = {
  children?: React.ReactNode
}

import CoinSVG from 'src/components/svg/CoinSVG/CoinSVG'
import Button from 'src/components/Button'

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="max-w-[1200px] min-h-screen m-auto px-2 lg:px-8">
      <header className="h-24 w-full py-4 flex justify-center">
        <div className="h-full">
          <CoinSVG height={60} width={60}></CoinSVG>
          <div className="flex items-center pl-8">
            <span className="text-center text-5xl">Class Kudos</span>
          </div>
        </div>
        <div className="flex items-center pl-8">
          <Button
            onClick={() => {
              window.alert('yay!')
            }}
          />
        </div>
      </header>
      {children}
    </div>
  )
}

export default HomeLayout
