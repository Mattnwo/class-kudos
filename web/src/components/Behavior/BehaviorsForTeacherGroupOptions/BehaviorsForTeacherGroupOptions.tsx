const BehaviorsForTeacherGroupOptions = ({ behaviorsOfGroup }) => {
  return (
    <ul>
      {behaviorsOfGroup.map((behavior) => (
        <li key={behavior.id}>
          {behavior.name} {behavior.value}
        </li>
      ))}
    </ul>
  )
}

export default BehaviorsForTeacherGroupOptions
