function PersonDetail() {
    return (
        <div>
            <h2>Person Details</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Occupation:</strong> {person.occupation}</p>
        </div>
    )
}
const person = {
    name: "John Doe",
  age: 30,
  occupation: "Software Engineer"
}

export default PersonDetail;