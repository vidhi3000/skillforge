export default function Navbar() {
 const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
 
 
    return (
    <div className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800">
  
     <h1 className=" text-2xl font-bold text-indigo-600 align text-center">SkillForge</h1>
     
      <div className="space-x-4">
        <button 
        onClick={toggleTheme}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Add Skill
        </button>
      </div>
    </div>
  );
}
