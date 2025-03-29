"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase, GraduationCap, User, Mail, Phone, MapPin, Globe, Trash2, Plus, Award } from "lucide-react"

export default function CVForm() {
  const [experiences, setExperiences] = useState([
    { id: 1, company: "", position: "", startDate: "", endDate: "", description: "" },
  ])
  const [educations, setEducations] = useState([
    { id: 1, institution: "", degree: "", startDate: "", endDate: "", description: "" },
  ])
  const [skills, setSkills] = useState([{ id: 1, name: "" }])

  const addExperience = () => {
    const newId = experiences.length ? Math.max(...experiences.map((exp) => exp.id)) + 1 : 1
    setExperiences([
      ...experiences,
      { id: newId, company: "", position: "", startDate: "", endDate: "", description: "" },
    ])
  }

  const removeExperience = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const addEducation = () => {
    const newId = educations.length ? Math.max(...educations.map((edu) => edu.id)) + 1 : 1
    setEducations([
      ...educations,
      { id: newId, institution: "", degree: "", startDate: "", endDate: "", description: "" },
    ])
  }

  const removeEducation = (id: number) => {
    setEducations(educations.filter((edu) => edu.id !== id))
  }

  const addSkill = () => {
    const newId = skills.length ? Math.max(...skills.map((skill) => skill.id)) + 1 : 1
    setSkills([...skills, { id: newId, name: "" }])
  }

  const removeSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  return (
    <div className="space-y-8">
      <Accordion type="single" collapsible defaultValue="personal" className="w-full">
        <AccordionItem value="personal">
          <AccordionTrigger className="text-lg font-medium flex items-center">
            <User className="mr-2 h-5 w-5" />
            Personal Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="Frontend Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex items-center border rounded-md">
                  <Mail className="ml-2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" placeholder="john@example.com" className="border-0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="flex items-center border rounded-md">
                  <Phone className="ml-2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" placeholder="+1 (555) 123-4567" className="border-0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex items-center border rounded-md">
                  <MapPin className="ml-2 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="New York, NY" className="border-0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex items-center border rounded-md">
                  <Globe className="ml-2 h-4 w-4 text-muted-foreground" />
                  <Input id="website" placeholder="https://johndoe.com" className="border-0" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                placeholder="Experienced frontend developer with 5+ years of experience in building responsive web applications..."
                rows={4}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-lg font-medium flex items-center">
            <Briefcase className="mr-2 h-5 w-5" />
            Work Experience
          </AccordionTrigger>
          <AccordionContent>
            {experiences.map((exp, index) => (
              <div key={exp.id} className="mb-6 p-4 border rounded-lg relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <h3 className="font-medium mb-4">Experience {index + 1}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${exp.id}`}>Company</Label>
                    <Input id={`company-${exp.id}`} placeholder="Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`position-${exp.id}`}>Position</Label>
                    <Input id={`position-${exp.id}`} placeholder="Job Title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                    <Input id={`startDate-${exp.id}`} placeholder="MM/YYYY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                    <Input id={`endDate-${exp.id}`} placeholder="MM/YYYY or Present" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`description-${exp.id}`}>Description</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="w-full mt-2 flex items-center justify-center gap-2"
              onClick={addExperience}
            >
              <Plus className="h-4 w-4" />
              Add Experience
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger className="text-lg font-medium flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            Education
          </AccordionTrigger>
          <AccordionContent>
            {educations.map((edu, index) => (
              <div key={edu.id} className="mb-6 p-4 border rounded-lg relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <h3 className="font-medium mb-4">Education {index + 1}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                    <Input id={`institution-${edu.id}`} placeholder="University Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input id={`degree-${edu.id}`} placeholder="Bachelor of Science" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`eduStartDate-${edu.id}`}>Start Date</Label>
                    <Input id={`eduStartDate-${edu.id}`} placeholder="MM/YYYY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`eduEndDate-${edu.id}`}>End Date</Label>
                    <Input id={`eduEndDate-${edu.id}`} placeholder="MM/YYYY or Present" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`eduDescription-${edu.id}`}>Description</Label>
                  <Textarea
                    id={`eduDescription-${edu.id}`}
                    placeholder="Describe your studies, achievements, GPA..."
                    rows={3}
                  />
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              className="w-full mt-2 flex items-center justify-center gap-2"
              onClick={addEducation}
            >
              <Plus className="h-4 w-4" />
              Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger className="text-lg font-medium flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Skills
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <Input id={`skill-${skill.id}`} placeholder="Skill (e.g., JavaScript, Photoshop)" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2" onClick={addSkill}>
              <Plus className="h-4 w-4" />
              Add Skill
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

