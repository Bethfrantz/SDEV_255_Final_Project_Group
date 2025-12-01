export default function Courses() {
  const courses = [
    {
      id: 1,
      name: "Intro to Programming",
      description: "Learn the basics of programming using JavaScript.",
      subject: "Computer Science",
      credits: 3
    },
    {
      id: 2,
      name: "English Composition",
      description: "Develop writing and composition skills.",
      subject: "English",
      credits: 3
    }
  ];

  return (
    <div className="page">
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Description</th><th>Subject</th><th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>{c.subject}</td>
              <td>{c.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
