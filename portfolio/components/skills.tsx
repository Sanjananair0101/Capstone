"use client"

import type React from "react"

import { useState } from "react"
import { Users, BrainCircuit, MessageSquare, Award, UserPlus, Lightbulb, Palette, Figma, Languages } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("soft")

  const softSkills: Skill[] = [
    { name: "Interpersonal", level: 90, icon: <UserPlus className="h-6 w-6" /> },
    { name: "Problem Solving", level: 85, icon: <BrainCircuit className="h-6 w-6" /> },
    { name: "Communication", level: 95, icon: <MessageSquare className="h-6 w-6" /> },
    { name: "Leadership", level: 80, icon: <Award className="h-6 w-6" /> },
    { name: "Teamwork", level: 90, icon: <Users className="h-6 w-6" /> },
    { name: "Creative Thinking", level: 85, icon: <Lightbulb className="h-6 w-6" /> },
  ]

  const technicalSkills: Skill[] = [
    { name: "Canva", level: 95, icon: <Palette className="h-6 w-6" /> },
    { name: "Figma", level: 80, icon: <Figma className="h-6 w-6" /> },
    { name: "English", level: 95, icon: <Languages className="h-6 w-6" /> },
    { name: "Hindi", level: 90, icon: <Languages className="h-6 w-6" /> },
    { name: "Malayalam", level: 85, icon: <Languages className="h-6 w-6" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#344E41]">Skills & Expertise</h2>

        <Tabs defaultValue="soft" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger
              value="soft"
              className={`text-lg py-3 ${activeTab === "soft" ? "bg-[#3A5A40] text-white" : "bg-[#DAD7CD] text-[#344E41]"}`}
            >
              Soft Skills
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              className={`text-lg py-3 ${activeTab === "technical" ? "bg-[#3A5A40] text-white" : "bg-[#DAD7CD] text-[#344E41]"}`}
            >
              Technical Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="soft" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-[#3A5A40]">{skill.icon}</div>
          <h3 className="text-xl font-semibold text-[#344E41]">{skill.name}</h3>
        </div>

        <div className="w-full bg-[#DAD7CD] rounded-full h-2.5">
          <div
            className="bg-[#3A5A40] h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <p className="text-right mt-1 text-sm text-[#5C7650]">{skill.level}%</p>
      </CardContent>
    </Card>
  )
}
