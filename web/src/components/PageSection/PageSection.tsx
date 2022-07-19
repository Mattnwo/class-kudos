const PageSection = ({ title, children }) => {
  return (
    <div className="w-full h-full rounded-lg flex flex-col border-indigo-600 border-[1px] mb-4 overflow-hidden">
      <div className="flex bg-indigo-600 p-2 pl-4">
        <div className="font-display text-2xl text-white">{title}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

export default PageSection

{
  /* <div className="w-full h-full p-4 rounded-lg flex flex-col border-indigo-600 border-[1px] mb-4">
      {title && (
        <div className="flex border-indigo-600 border-b-[1px] pb-2 mb-2">
          <div className="font-display text-2xl text-indigo-600">{title}</div>
        </div>
      )}
      {children}
    </div> */
}
