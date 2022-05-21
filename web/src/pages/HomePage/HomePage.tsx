import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

import HighFiveSVG from 'src/components/svg/HighFiveSVG/HighFiveSVG'
import GiveSVG from 'src/components/svg/GiveSVG/GiveSVG'
import BuySVG from 'src/components/svg/BuySVG/BuySVG'
import ManageSVG from 'src/components/svg/ManageSVG/ManageSVG'

const HomePage = () => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth()
  return (
    <>
      <MetaTags
        title="Class Kudos - Welcome!"
        description="A simple classroom management economy."
        ogUrl="https://www.classkudos.com"
        ogContentUrl="https://www.classkudos.com/ClassKudos.svg"
      />
      <h1 className="text-center text-5xl font-bold pb-4">
        Kudos = Happy Humans
      </h1>
      {/* Welcome Text */}
      <section className="w-full h-full flex flex-col-reverse items-center md:flex-row my-12">
        <div className="px-4 md:ml-10 w-full md:w-2/3">
          <h2 className="font-display text-2xl mb-4 text-center md:text-left">
            Welcome to Class Kudos!
          </h2>
          <p className="text-xl text-gray-800">
            Behavior management websites are too bloated and opinionated.
          </p>
          <br></br>
          <p className="text-xl text-gray-800">
            Social media features?{' '}
            <span role="img" aria-label="merp">
              😑
            </span>
          </p>
          <p className="text-xl text-gray-800">
            Digital &quot;walls&quot; of classroom work?{' '}
            <span role="img" aria-label="questioning">
              🧐
            </span>
          </p>
          <p className="text-xl font-bold text-gray-800">
            You just want to give some kudos!{' '}
            <span role="img" aria-label="party">
              🥳
            </span>{' '}
          </p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <HighFiveSVG width="200" />
        </div>
      </section>
      {/* Descriptions */}
      <section className="grid grid-rows-1 md:grid-cols-3 px-4 gap-4 my-12">
        <div className="flex flex-col justify-start items-center">
          <h2 className="font-display text-2xl mb-4">Teacher Gives Kudos</h2>
          <div className="h-36 w-64 flex justify-center items-center mb-4">
            <GiveSVG width={220} />
          </div>
          <p className="text-gray-800">
            Award students &quot;kudos&quot; they can use to redeem rewards. You
            can set custom rewards for your own classes or student groups.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <h2 className="font-display text-2xl mb-4">Students Redeem Kudos</h2>
          <div className="h-36 w-64 flex justify-center items-center mb-4">
            <BuySVG width={125} />
          </div>
          <p className="text-gray-800">
            Students can see their total kudos on their own dashboard, as well
            as redeem their kudos for rewards their teacher&apos;s have set up
            for them.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <h2 className="font-display text-2xl mb-4">
            Teacher Manages Rewards
          </h2>
          <div className="h-36 w-64 flex justify-center items-center mb-4">
            <ManageSVG width={200} />
          </div>
          <p className="text-gray-800">
            Teachers can manage redeemed awards on their own time. Need to
            remove a request? No problem! Want to ask a question when students
            redeem their kudos? You can do that too.
          </p>
        </div>
      </section>
    </>
  )
}

export default HomePage
