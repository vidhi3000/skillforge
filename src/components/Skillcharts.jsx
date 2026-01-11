import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

export default function SkillCharts({ skills }) {

  const data = skills.map(skill => ({
    name: skill.name,
    value: skill.progress
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

      {/* PIE CHART */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Skill Distribution</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80} label>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Progress Chart</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#14B8A6"];
