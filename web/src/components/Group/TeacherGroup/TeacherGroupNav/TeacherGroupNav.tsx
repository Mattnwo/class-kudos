import { Fragment, useEffect } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { NavLink, navigate, routes, useMatch } from '@redwoodjs/router'

import { useTeacherGroups } from 'src/context/TeacherGroupsContext'

const TeacherGroupNav = () => {
  const { currentGroup, setCurrentGroup, teacherGroups } = useTeacherGroups()
  const atHome = useMatch(routes.teacherHome())

  const changeGroup = (group) => {
    setCurrentGroup(group)
    navigate(routes.teacherGroup({ groupId: group.id }))
  }

  // Do not show nav if no group set, or on home page
  if (atHome.match || !currentGroup) return null

  return (
    <div className="pt-1">
      <Listbox
        value={currentGroup?.name}
        onChange={(group) => changeGroup(group)}
      >
        <Listbox.Button className="font-body relative w-full cursor-default rounded-lg bg-indigo-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
          <span className="block truncate font-display text-lg text-white">
            {currentGroup.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="font-body absolute mt-1 max-h-60 w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {teacherGroups.map((group, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 font-display ${
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
                      {group.name}
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
      <nav className="mt-4 font-body">
        <ul>
          <NavLink
            to={routes.teacherGroup({ groupId: currentGroup.id })}
            className="w-full inline-block text-normal mb-1 px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Students
          </NavLink>
          <NavLink
            to={routes.teacherGroupFeedback({ groupId: currentGroup.id })}
            className="w-full inline-block text-normal mb-1 px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Feedback
          </NavLink>
          <NavLink
            to={routes.teacherGroupRedeemed({ groupId: currentGroup.id })}
            className="w-full inline-block text-normal mb-1 px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Redeemed
          </NavLink>
          <NavLink
            to={routes.teacherGroupOptions({ groupId: currentGroup.id })}
            className="w-full inline-block text-normal mb-1 px-4 py-2 text-center rounded-md hover:bg-indigo-100"
            activeClassName="bg-indigo-100"
          >
            Options
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default TeacherGroupNav
