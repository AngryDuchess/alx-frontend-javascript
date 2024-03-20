export default function getListStudents() {
  const firstNames = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const ids = [1, 2, 5];

  const students = firstNames.map((name, index) => ({
    id: ids[index],
    firstName: name,
    location: locations[index],
  }));
  return [...students];
}
