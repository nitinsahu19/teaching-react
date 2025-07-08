import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courses, setCourses] = useState([
    { title: 'React Basics', students: 120 },
    { title: 'JavaScript Advanced', students: 95 },
  ]);
  const [newCourse, setNewCourse] = useState('');
  const [newStudents, setNewStudents] = useState('');

  const handleAddCourse = () => {
    if (newCourse.trim() !== '' && newStudents !== '') {
      setCourses([
        ...courses,
        { title: newCourse.trim(), students: parseInt(newStudents) },
      ]);
      setNewCourse('');
      setNewStudents('');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
      
      <aside className="w-20 md:w-64 bg-blue-900 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-10 hidden md:block">EduPro</h1>
        <nav className="space-y-4 text-sm">
          {[
            { label: 'Dashboard', icon: '🏠', key: 'dashboard' },
            { label: 'Courses', icon: '📚', key: 'courses' },
            { label: 'Settings', icon: '⚙️', key: 'settings' },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-blue-700 ${
                activeTab === item.key ? 'bg-blue-700' : ''
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="mt-auto text-sm text-center hidden md:block text-gray-300 pt-10">
          © 2025 EduPro
        </div>
      </aside>
 
      <main className="flex-1"> 
        <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded w-1/2"
          />
          <div className="flex items-center space-x-3">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full"
            />
            <span className="font-medium">Rahul</span>
          </div>
        </header>
 
        {activeTab === 'dashboard' && (
          <section className="p-4 grid gap-4 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">Total Courses</h3>
              <p className="text-2xl font-bold text-blue-700">
                {courses.length}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">Total Students</h3>
              <p className="text-2xl font-bold text-green-600">
                {courses.reduce((acc, curr) => acc + curr.students, 0)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">Active Sessions</h3>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
          </section>
        )}

        {activeTab === 'courses' && (
          <>
            <section className="p-4">
              <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
              <div className="bg-white p-4 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  placeholder="Course Name"
                  className="border px-4 py-2 rounded"
                />
                <input
                  type="number"
                  value={newStudents}
                  onChange={(e) => setNewStudents(e.target.value)}
                  placeholder="Students Enrolled"
                  className="border px-4 py-2 rounded"
                />
                <button onClick={handleAddCourse} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >  Add Course </button>
              </div>
            </section>

            <section className="p-4">
              <h2 className="text-xl font-semibold mb-4">All Courses</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {courses.map((course, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                    <p className="text-sm text-gray-500">
                      Students: {course.students}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'settings' && (
          <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="bg-white p-4 rounded-xl shadow space-y-4">
              <p className="text-gray-600">🚧 Settings page under construction...</p>
              <p className="text-sm text-gray-400">You can add dark mode, profile editing, notification toggles here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
