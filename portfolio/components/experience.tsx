import type React from "react"
import { Briefcase, GraduationCap, Users, Award } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#DAD7CD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#344E41]">Experience & Education</h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#3A5A40]"></div>

            {/* Education */}
            <TimelineItem
              title="Integrated MBA"
              organization="NIIT University"
              period="Currently Pursuing"
              description="Maintaining a CGPA of 6.79 while actively participating in various extracurricular activities and leadership roles."
              icon={<GraduationCap className="h-6 w-6" />}
              position="right"
            />

            {/* Internship */}
            <TimelineItem
              title="Internship"
              organization="Vishwa Yuvak Kendra"
              period="1st June - 20th July 2020"
              description="Gained practical experience in a professional environment, developing key skills in communication and project management."
              icon={<Briefcase className="h-6 w-6" />}
              position="left"
            />

            {/* Project 1 */}
            <TimelineItem
              title="Research Project"
              organization="My Health Wellness Clinic's Digital Presence"
              period="V Semester Project"
              description="Analyzed challenges and developed solutions for improving the digital presence of a health wellness clinic."
              icon={<Award className="h-6 w-6" />}
              position="right"
            />

            {/* Project 2 */}
            <TimelineItem
              title="Capstone Project"
              organization="Showcasing me: A Digital Portfolio"
              period="VI Semester Project"
              description="Designed and developed a comprehensive digital portfolio to showcase professional skills and achievements."
              icon={<Award className="h-6 w-6" />}
              position="left"
            />

            {/* Extra-curricular */}
            <TimelineItem
              title="Leadership & Extracurricular Activities"
              organization="Various Organizations"
              period="Ongoing"
              description="Social Media Director of Hult Prize NU, Club Coordinator of Social Media Club, Member of NSS, Member of Theatre Club (Rangmanch), Speaker's Point of Contact in TEDx."
              icon={<Users className="h-6 w-6" />}
              position="right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  title: string
  organization: string
  period: string
  description: string
  icon: React.ReactNode
  position: "left" | "right"
}

function TimelineItem({ title, organization, period, description, icon, position }: TimelineItemProps) {
  return (
    <div
      className={`relative flex items-center justify-between mb-16 ${position === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="hidden md:block w-5/12"></div>

      {/* Icon */}
      <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 z-10">
        <div className="bg-[#344E41] text-white p-3 rounded-full shadow-lg">{icon}</div>
      </div>

      {/* Content */}
      <div
        className={`relative md:w-5/12 ml-12 md:ml-0 ${position === "right" ? "md:mr-0" : "md:ml-0"} p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#3A5A40]`}
      >
        <h3 className="text-xl font-bold text-[#344E41]">{title}</h3>
        <h4 className="text-lg font-semibold text-[#5C7650] mb-2">{organization}</h4>
        <p className="text-sm text-gray-500 mb-3">{period}</p>
        <p className="text-[#344E41]">{description}</p>
      </div>
    </div>
  )
}
