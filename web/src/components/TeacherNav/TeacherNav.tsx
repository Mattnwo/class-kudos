import { NavLink, routes } from '@redwoodjs/router'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import DashboardHomeButton from 'src/components/DashboardHomeButton/DashboardHomeButton'

const groups = ['ELA', 'Math', 'Science', 'History']

const TeacherNav = () => {
  const [currentGroup, setCurrentGroup] = useState(groups[0])
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center items-center p-4">
        <DashboardHomeButton />
      </div>
      <Listbox value={currentGroup} onChange={setCurrentGroup}>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
          <span className="block truncate">{currentGroup}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {groups.map((group, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                  }`
                }
                value={group}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {group}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
      <nav>
        <ul>
          <NavLink
            to={routes.home()}
            className="w-full inline-block text-normal font-display px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Students
          </NavLink>
          <NavLink
            to={routes.home()}
            className="w-full inline-block text-normal font-display px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Feedback
          </NavLink>
          <NavLink
            to={routes.home()}
            className="w-full inline-block text-normal font-display px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Redeemed
          </NavLink>
          <NavLink
            to={routes.home()}
            className="w-full inline-block text-normal font-display px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Options
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default TeacherNav
