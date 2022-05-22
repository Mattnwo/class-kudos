const Button = (props) => {
  if (props.green)
    return (
      <button
        className="py-2 px-4 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white"
        onClick={props.onClick}
      >
        Login
      </button>
    )
  if (props.red)
    return (
      <button
        className="py-2 px-4 bg-rose-600 hover:bg-rose-500 rounded-md text-white"
        onClick={props.onClick}
      >
        Login
      </button>
    )

  return (
    <button
      className="py-2 px-4 bg-indigo-700 hover:bg-indigo-500 rounded-md text-white"
      onClick={props.onClick}
    >
      Login
    </button>
  )
}

export default Button
