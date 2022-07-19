const RewardsForTeacherGroupOptions = ({ rewards }) => {
  return (
    <ul>
      {rewards.map((reward) => {
        return (
          <li key={reward.id}>
            {reward.name} {reward.cost}
          </li>
        )
      })}
    </ul>
  )
}

export default RewardsForTeacherGroupOptions
