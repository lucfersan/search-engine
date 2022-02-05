const students = [
  {
    name: 'Lucas Fernandes',
    gpa: 3.8,
    course: 'Software Engineering'
  },
  {
    name: 'Noah Garcia',
    gpa: 2.3,
    course: 'Architecture'
  },
  {
    name: 'Liam Smith',
    gpa: 1.7,
    course: 'Dentistry'
  },
  {
    name: 'Emma Davis',
    gpa: 4.0,
    course: 'Medicine'
  }
]

// selects html element
const selectElement = (selector) => {
  return document.querySelector(selector)
}

const getResults = () => {
  clearResults()

  const search = selectElement('.search-bar').value
  
  if (search) {
    for (const student of students) {
      if (
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.course.toLowerCase().includes(search.toLowerCase())
      ) {
        selectElement('.results').innerHTML += `
          <div class="result-item">
            <span><strong>Name:</strong>${student.name}</span>
            <span><strong>GPA:</strong>${student.gpa}</span>
            <span><strong>Course:</strong>${student.course}</span>
          </div>
        `
      }
    }
  }
}

const clearResults = () => {
  selectElement('.results').innerHTML = ''
}

selectElement('.search-bar').addEventListener('keyup', getResults)