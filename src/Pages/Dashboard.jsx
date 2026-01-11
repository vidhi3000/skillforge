
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SkillCard from "../component/SkillCard";
import StatCard from "../component/StateCard";
import AddSkillDialog from "./AddskillDialog";
import { Target, CheckCircle2, Activity, TrendingUp } from "lucide-react";
export default function Dashboard() {
  const [skills, setSkills] = useState(
    JSON.parse(localStorage.getItem("skills")) || []
  );


  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const addSkill = (newSkill) => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        ...newSkill,
      },
    ]);
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

const totalSkills = skills.length;
const completedSkills = skills.filter((s) => Number(s.progress) === 100).length;
const inProgressSkills = skills.filter((s) => Number(s.progress) < 100).length;
const overallProgress = totalSkills > 0 ? Math.round(skills.reduce((sum, skill) => sum + (Number(skill.progress) || 0), 0) / totalSkills) : 0;

const updateProgress = (id, newProgress) => {
  setSkills(skills.map(skill => skill.id === id ? { ...skill, progress: newProgress } : skill));
};
  return (
    <div className="min-h-screen bg-white">
<header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight">SkillForge</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            Overall Progress: <span className="font-semibold text-foreground">{overallProgress}%</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
          Track Your Skill Journey
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Build expertise, one milestone at a time. Track your progress and achieve your learning goals.
        </p>
        <AddSkillDialog onAdd={addSkill} />
      </section>

{/* Statistics Dashboard */}
      {totalSkills > 0 && (
        <section className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Skills"
              value={totalSkills}
              icon={Target}
              description="Skills being tracked"
            />
            <StatCard
              title="Completed"
              value={completedSkills}
              icon={CheckCircle2}
              description="100% mastered"
            />
            <StatCard
              title="In Progress"
              value={inProgressSkills}
              icon={Activity}
              description="Currently learning"
            />
            <StatCard
              title="Avg Progress"
              value={`${overallProgress}%`}
              icon={TrendingUp}
              description="Overall mastery"
            />
          </div>
        </section>
      )}

      {/* Skills Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Your Skills</h3>
          {totalSkills > 0 && (
            <p className="text-sm text-muted-foreground">
              {totalSkills} {totalSkills === 1 ? 'skill' : 'skills'} tracked
            </p>
          )}
        </div>
        {skills.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No skills yet</h3>
            <p className="text-muted-foreground">
              Add your first skill to start tracking your progress
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onUpdate={updateProgress}
                onDelete={deleteSkill}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};


      