import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef, useEffect, useState } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Tab } from '@headlessui/react'

import StudentSVG from 'src/components/svg/StudentSVG/StudentSVG'
import TeacherSVG from 'src/components/svg/TeacherSVG/TeacherSVG'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [accountRole, setAccountRole] = useState('student')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const firstNameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    firstNameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    window.confirm(`Are you sure you want to create ${accountRole} account?`)
    const response = await signUp({ ...data, role: accountRole })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  const handleRoleChange = (index) => {
    if (index === 1) {
      setAccountRole('teacher')
    } else {
      setAccountRole('student')
    }
    console.log(accountRole)
  }

  const isSelected = 'w-1/2 bg-indigo-500 rounded-xl text-white'
  const notSelected = 'w-1/2 rounded-xl'

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Sign Up</h2>
            </header>
            <div className="rw-segment-main">
              <div className="w-full">
                <Tab.Group
                  defaultIndex={1}
                  onChange={(index) => {
                    handleRoleChange(index)
                  }}
                >
                  <div className="text-center w-full pb-4 text-indigo-500 font-bold">
                    Create account as a:
                  </div>
                  <Tab.List className="m-auto w-48 h-8 flex space-x-1 rounded-xl p-1 bg-indigo-100">
                    <Tab
                      className={({ selected }) =>
                        selected ? isSelected : notSelected
                      }
                    >
                      Student
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected ? isSelected : notSelected
                      }
                    >
                      Teacher
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel className="flex justify-center">
                      <StudentSVG width={200} height={200} />
                    </Tab.Panel>
                    <Tab.Panel className="flex justify-center">
                      <TeacherSVG width={200} height={200} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="firstName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    First Name
                  </Label>
                  <TextField
                    name="firstName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={firstNameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'First name is required',
                      },
                    }}
                  />
                  <FieldError name="firstName" className="rw-field-error" />

                  <Label
                    name="lastName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Last Name
                  </Label>
                  <TextField
                    name="lastName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'Last Name is required',
                      },
                    }}
                  />
                  <FieldError name="lastName" className="rw-field-error" />

                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
