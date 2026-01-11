import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/component/ui/dialog";
import { Button } from "@/component/ui/button";
import { Label } from "@/component/ui/label";
import { Input } from "@/component/ui/input";
import { Plus } from "lucide-react";

export default function AddskillDialog({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && goal && category) {
      onAdd({
        name,
        goal,
        category,
        progress: 0,
      });
      setName("");
      setGoal("");
      setCategory("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="h-5 w-5" />
          Add New Skill
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Skill</DialogTitle>
          <DialogDescription>
            Define a skill you want to track and improve over time.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Skill Name</Label>
            <Input
              id="name"
              placeholder="e.g., JavaScript, Guitar, Photography"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              placeholder="e.g., Programming, Music, Art"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal">Goal</Label>
            <Input
              id="goal"
              placeholder="e.g., Build 5 projects, Play 10 songs"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Skill
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// If other files import the component as a named export, they should import the default
// or we could add: export { AddSkillDialog };