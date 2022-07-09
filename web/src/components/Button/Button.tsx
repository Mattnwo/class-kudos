const Button = (props) => {
  if (props.green)
    return (
      <button
        className="h-10 py-2 px-4 bg-emerald-500 hover:bg-emerald-600 rounded-md text-white"
        onClick={props.onClick}
      >
        Login
      </button>
    )
  if (props.red)
    return (
      <button
        className="h-10 py-2 px-4 bg-rose-500 hover:bg-rose-600 rounded-md text-white"
        onClick={props.onClick}
      >
        Login
      </button>
    )

  return (
    <button
      className="h-10 py-2 px-4 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
